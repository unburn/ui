"use client";

import React, { useEffect, useRef } from 'react';
import { Mic, MicOff, X, MoreHorizontal } from 'lucide-react';
import './VoiceAgent.css';
import { cn } from '../../lib/utils';
import { Button, ButtonGroup } from '../Button/Button';

export interface VoiceAgentProps {
  status?: 'idle' | 'connecting' | 'listening' | 'speaking' | 'paused';
  variant?: 'grid';
  color?: string;
  gridSize?: { rows: number; cols: number };
  pattern?: 'wave' | 'blob' | 'ripple';
  isMuted?: boolean;
  onMuteToggle?: () => void;
  onDisconnect?: () => void;
  onOptionClick?: () => void;
  showControls?: boolean;
  audioAnalyser?: AnalyserNode;
  dotSize?: number;
  gridGap?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({
  status = 'idle',
  variant = 'grid',
  color,
  gridSize = { rows: 9, cols: 9 },
  pattern,
  isMuted = false,
  onMuteToggle,
  onDisconnect,
  onOptionClick,
  showControls = true,
  audioAnalyser,
  dotSize = 8,
  gridGap = 6,
  className,
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const speakPattern = pattern || 'blob';

  const iconSize = 14;

  const resolvedColor = color;

  const { rows, cols } = gridSize;
  const totalDots = rows * cols;

  useEffect(() => {
    const dots = containerRef.current?.querySelectorAll('.unburn-voice-dot');
    if (!dots || dots.length !== totalDots) return;

    const animate = (time: number) => {
      lastTimeRef.current = time;

      let analyserData: Uint8Array | null = null;
      let averageVolume = 0;

      if (audioAnalyser && status !== 'idle' && status !== 'paused') {
        analyserData = new Uint8Array(audioAnalyser.frequencyBinCount);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        audioAnalyser.getByteFrequencyData(analyserData as any);
        
        let sum = 0;
        const range = Math.min(analyserData.length, 128);
        for (let i = 0; i < range; i++) {
          sum += analyserData[i];
        }
        averageVolume = sum / (range || 1) / 255;
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          const dot = dots[index] as HTMLElement;
          if (!dot) continue;

          let active: boolean;

          const ny = (r - (rows - 1) / 2) / ((rows - 1) / 2 || 1);
          const nx = (c - (cols - 1) / 2) / ((cols - 1) / 2 || 1);
          const dist = Math.sqrt(nx * nx + ny * ny);

          switch (status) {
            case 'connecting': {
              const angle = Math.atan2(ny, nx) + Math.PI; // [0, 2*PI]
              const sweep = (time * 0.003) % (2 * Math.PI);
              const diff = (angle - sweep + 4 * Math.PI) % (2 * Math.PI);

              active = diff < 0.4 || (dist < 0.25 && Math.sin(time * 0.008) > 0);
              break;
            }
            case 'listening': {
              if (analyserData) {
                const boostedVolume = Math.min(1, averageVolume * 2.8);
                const pulse = 0.2 + 0.75 * boostedVolume;
                active = Math.abs(dist - pulse) < 0.2 || dist < (0.12 + 0.15 * boostedVolume);
              } else {
                const pulse = Math.sin(time * 0.005) * 0.22 + 0.45;
                active = Math.abs(dist - pulse) < 0.18 || dist < 0.15;
              }
              break;
            }
            case 'speaking': {
              if (speakPattern === 'blob') {
                const angle = Math.atan2(ny, nx);
                const noise = Math.sin(angle * 5 + time * 0.006) * 0.12 +
                  Math.cos(angle * 3 - time * 0.004) * 0.08;
                
                const activity = analyserData
                  ? 0.25 + 0.6 * averageVolume
                  : 0.45 + 0.35 * Math.sin(time * 0.007) * Math.cos(time * 0.003);

                active = dist <= (activity + noise);
              } else if (speakPattern === 'ripple') {
                const speechActivity = analyserData
                  ? averageVolume
                  : 0.3 + 0.7 * Math.sin(time * 0.007) * Math.cos(time * 0.003);
                const frequency = 12.0;
                const speed = 0.012;
                const wave = Math.sin(dist * frequency - time * speed);
                
                const maxRadius = 0.2 + 0.8 * speechActivity;
                
                const threshold = 0.2 + (dist / maxRadius) * 0.6;
                active = dist <= maxRadius && wave > threshold;
              } else {
                const envelope = Math.sin((nx + 1) * Math.PI / 2);
                let waveHeight: number;

                if (analyserData) {
                  const freqBins = Math.min(analyserData.length, 64);
                  const binIndex = Math.floor(((nx + 1) / 2) * (freqBins - 1));
                  const freqValue = analyserData[binIndex] / 255;
                  waveHeight = envelope * freqValue * 0.95;
                } else {
                  const speechActivity = 0.5 + 0.5 * Math.sin(time * 0.009) * Math.cos(time * 0.004);
                  waveHeight = envelope * speechActivity * 0.7 * (1 + 0.3 * Math.sin(nx * 5 + time * 0.015));
                }

                active = Math.abs(ny) <= waveHeight;
              }
              break;
            }
            case 'paused': {
              active = Math.abs(ny) < 0.1 && Math.abs(nx) < 0.3;
              break;
            }
            case 'idle':
            default: {
              const breathing = Math.sin(time * 0.002) * 0.15 + 0.1;
              active = Math.abs(ny) < 0.09 && Math.abs(nx) < breathing;
              break;
            }
          }

          if (active) {
            dot.classList.add('unburn-dot-active');
          } else {
            dot.classList.remove('unburn-dot-active');
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [status, rows, cols, totalDots, speakPattern, audioAnalyser]);

  const dotsArray = Array.from({ length: totalDots });

  return (
    <div
      className={cn(
        'unburn-voice-agent',
        `unburn-variant-${variant}`,
        `unburn-status-${status}`,
        isMuted && 'unburn-muted',
        className
      )}
      style={{
        ...style,
        ...(color ? { '--voice-accent': color } : {}),
        '--voice-dot-size': `${dotSize}px`,
        '--voice-grid-gap': `${gridGap}px`
      } as React.CSSProperties}
    >
      <div className="unburn-voice-grid-container unburn-glass" ref={containerRef}>
        <div
          className="unburn-voice-grid"
          style={{
            gridTemplateRows: `repeat(${rows}, var(--voice-dot-size, 8px))`,
            gridTemplateColumns: `repeat(${cols}, var(--voice-dot-size, 8px))`,
          }}
        >
          {dotsArray.map((_, i) => {
            const r = Math.floor(i / cols);
            const c = i % cols;
            const isCorner =
              (r === 0 && c === 0) ||
              (r === 0 && c === cols - 1) ||
              (r === rows - 1 && c === 0) ||
              (r === rows - 1 && c === cols - 1);
            return (
              <div
                key={i}
                className={cn("unburn-voice-dot", isCorner && "unburn-dot-hidden")}
              />
            );
          })}
        </div>
      </div>

      {showControls && (
        <div className="unburn-voice-controls">
          <ButtonGroup>
            <Button
              variant="duo"
              color={isMuted ? 'red' : resolvedColor}
              onClick={onMuteToggle}
              aria-label={isMuted ? "Unmute Microphone" : "Mute Microphone"}
              icon={isMuted ? <MicOff size={iconSize} /> : <Mic size={iconSize} />}
            />
            <Button
              variant="duo"
              color={resolvedColor}
              onClick={onOptionClick}
              aria-label="More Settings"
              icon={<MoreHorizontal size={iconSize} />}
            />
          </ButtonGroup>

          <Button
            variant="duo"
            color="red"
            onClick={onDisconnect}
            aria-label="End Voice Call"
            icon={<X size={iconSize} />}
          />
        </div>
      )}
    </div>
  );
};
