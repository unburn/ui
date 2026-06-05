import React, { useState, useEffect, useRef } from 'react';
import { VoiceAgent } from '../../../package/components/VoiceAgent/VoiceAgent';
import { Showcase } from '../../components/layout/Showcase';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { Props } from '../../components/layout/Props';
import { ComponentHeader } from '../../components/layout/ComponentHeader';
import { Button } from '../../../package/components/Button/Button';
import { Slider } from '../../../package/components/Slider/Slider';
import { Input } from '../../../package/components/Input/Input';
import { Switch } from '../../../package/components/Switch/Switch';
import { Sliders, Layers, Play, Pause, Mic, MicOff } from 'lucide-react';

export const VoiceAgentPage: React.FC = () => {
  const [color, setColor] = useState(() => {
    if (typeof document !== 'undefined') {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      return currentTheme === 'light' ? '#000000' : '#ffffff';
    }
    return '#ffffff';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark';
      setTheme(currentTheme);
      setColor(prev => {
        if (currentTheme === 'light' && prev === '#ffffff') {
          return '#000000';
        }
        if (currentTheme === 'dark' && prev === '#000000') {
          return '#ffffff';
        }
        return prev;
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const [status, setStatus] = useState<'idle' | 'connecting' | 'listening' | 'speaking' | 'paused'>('speaking');
  const [isMuted, setIsMuted] = useState(false);
  const [pattern, setPattern] = useState<'wave' | 'blob' | 'ripple'>('blob');
  const [rows, setRows] = useState(9);
  const [cols, setCols] = useState(9);
  const [showControls, setShowControls] = useState(true);
  const [dotSize, setDotSize] = useState(8);
  const [gridGap, setGridGap] = useState(6);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | undefined>(undefined);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const micSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

  const initAudio = () => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioContextClass();

      const analyserNode = audioContextRef.current.createAnalyser();
      analyserNode.fftSize = 256;
      analyserRef.current = analyserNode;
      setAnalyser(analyserNode);
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const stopMic = () => {
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(track => track.stop());
      micStreamRef.current = null;
    }
    if (micSourceRef.current) {
      micSourceRef.current.disconnect();
      micSourceRef.current = null;
    }
    setIsMicActive(false);
  };

  const handlePlayAudio = () => {
    try {
      initAudio();

      if (isMicActive) {
        stopMic();
      }

      if (isPlayingAudio) {
        audioElementRef.current?.pause();
        setIsPlayingAudio(false);
        setStatus('idle');
      } else {
        if (!audioElementRef.current) {
          const audio = new Audio('/demo.wav');
          audio.crossOrigin = 'anonymous';
          audioElementRef.current = audio;

          const source = audioContextRef.current!.createMediaElementSource(audio);
          audioSourceRef.current = source;
          source.connect(analyserRef.current!);
          analyserRef.current!.connect(audioContextRef.current!.destination);

          audio.addEventListener('ended', () => {
            setIsPlayingAudio(false);
            setStatus('idle');
          });
        }

        audioElementRef.current.play();
        setIsPlayingAudio(true);
        setStatus('speaking');
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
  };

  const handleMicToggle = async () => {
    try {
      if (isMicActive) {
        stopMic();
        setStatus('idle');
      } else {
        initAudio();

        if (isPlayingAudio) {
          audioElementRef.current?.pause();
          setIsPlayingAudio(false);
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        micStreamRef.current = stream;

        const source = audioContextRef.current!.createMediaStreamSource(stream);
        micSourceRef.current = source;

        source.connect(analyserRef.current!);

        setIsMicActive(true);
        setStatus('listening');
      }
    } catch (err) {
      console.error('Failed to access microphone:', err);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  useEffect(() => {
    return () => {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
      stopMic();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const swatches = [
    { name: theme === 'light' ? 'Black' : 'White', value: theme === 'light' ? '#000000' : '#ffffff' },
    { name: 'Cyan', value: '#38bdf8' },
    { name: 'Purple', value: '#c084fc' },
    { name: 'Emerald', value: '#34d399' },
    { name: 'Amber', value: '#fbbf24' },
    { name: 'Rose', value: '#f43f5e' },
  ];

  const dynamicCode = `import { VoiceAgent } from '@unburn/ui/VoiceAgent';

export default function AudioScreen() {
  return (
    <VoiceAgent
      status="${status}"
      variant="grid"
      color="${color}"
      gridSize={{ rows: ${rows}, cols: ${cols} }}${pattern !== 'blob' ? `\n      pattern="${pattern}"` : ''}${isMuted ? '\n      isMuted={true}' : ''}${!showControls ? '\n      showControls={false}' : ''}
      dotSize={${dotSize}}
      gridGap={${gridGap}}
    />
  );
}`;

  return (
    <>
      <ComponentHeader title="Voice Agent" />

      <div className="playground-section" style={{ marginBottom: '3rem' }}>
        <h3 className="section-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Sliders size={18} /> Interactive Playground
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Tweak properties in real-time to preview animations, colors, size presets, and custom CSS variables.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'stretch'
        }}>
          <div style={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2rem',
            minHeight: '380px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ zIndex: 2 }}>
              <VoiceAgent
                status={status}
                variant="grid"
                color={color}
                gridSize={{ rows, cols }}
                pattern={pattern}
                isMuted={isMuted}
                audioAnalyser={analyser}
                showControls={showControls}
                onMuteToggle={() => setIsMuted(prev => !prev)}
                onDisconnect={() => {
                  if (isPlayingAudio) {
                    audioElementRef.current?.pause();
                    setIsPlayingAudio(false);
                  }
                  if (isMicActive) {
                    stopMic();
                  }
                  setStatus('idle');
                }}
                onOptionClick={() => alert('More options clicked')}
                dotSize={dotSize}
                gridGap={gridGap}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}>
              LIVE COMPONENT PREVIEW
            </div>
          </div>

          <div style={{
            flex: '1 1 350px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            padding: '1.5rem',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-color)',
            }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                🎙️ Interactive Audio Source
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                <Button
                  variant={isPlayingAudio ? 'filled' : 'outlined'}
                  onClick={handlePlayAudio}
                  style={{ flex: 1, fontSize: '0.75rem', gap: '0.4rem', justifyContent: 'center' }}
                >
                  {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />}
                  {isPlayingAudio ? 'Pause Demo' : 'Play Demo'}
                </Button>
                <Button
                  variant={isMicActive ? 'filled' : 'outlined'}
                  onClick={handleMicToggle}
                  style={{ flex: 1, fontSize: '0.75rem', gap: '0.4rem', justifyContent: 'center' }}
                >
                  {isMicActive ? <MicOff size={14} /> : <Mic size={14} />}
                  {isMicActive ? 'Mute Mic' : 'Live Mic'}
                </Button>
              </div>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                {isPlayingAudio && 'Playing demo.wav - Agent is reacting to the audio file!'}
                {isMicActive && 'Microphone active - Speak to see the agent respond!'}
                {!isPlayingAudio && !isMicActive && 'Try playing the demo audio file or using your microphone.'}
              </p>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Agent Status
              </label>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {(['idle', 'connecting', 'listening', 'speaking', 'paused'] as const).map((s) => (
                  <Button
                    key={s}
                    variant={status === s ? 'filled' : 'outlined'}
                    onClick={() => {
                      if (isPlayingAudio) {
                        audioElementRef.current?.pause();
                        setIsPlayingAudio(false);
                      }
                      if (isMicActive) {
                        stopMic();
                      }
                      setStatus(s);
                    }}
                    style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', minHeight: '28px' }}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>

            {status === 'speaking' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Speaking Pattern
                </label>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {(['blob', 'wave', 'ripple'] as const).map((p) => (
                    <Button
                      key={p}
                      variant={pattern === p ? 'filled' : 'outlined'}
                      onClick={() => setPattern(p)}
                      style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', minHeight: '28px' }}
                    >
                      {p}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Accent Color
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                {swatches.map((swatch) => (
                  <button
                    key={swatch.value}
                    onClick={() => setColor(swatch.value)}
                    title={swatch.name}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: swatch.value,
                      border: color === swatch.value ? '2px solid var(--text-main)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      transform: color === swatch.value ? 'scale(1.15)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>
              <Input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Custom Hex/RGB color"
                variant="outlined"
                size="sm"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Grid Layout ({rows}x{cols})
                </span>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => { setRows(9); setCols(9); setDotSize(8); setGridGap(6) }}
                  style={{ padding: '0.1rem 0.4rem', minHeight: '20px', fontSize: '0.65rem' }}
                >
                  RESET
                </Button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <Slider
                  label="Rows"
                  min={3}
                  max={15}
                  value={rows}
                  onChange={setRows}
                  showTooltip
                  size="sm"
                />
                <Slider
                  label="Cols"
                  min={3}
                  max={15}
                  value={cols}
                  onChange={setCols}
                  showTooltip
                  size="sm"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Variables Customization
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <Slider
                  label="Dot Size"
                  min={4}
                  max={16}
                  value={dotSize}
                  onChange={setDotSize}
                  showTooltip
                  size="sm"
                />
                <Slider
                  label="Gap Spacing"
                  min={2}
                  max={12}
                  value={gridGap}
                  onChange={setGridGap}
                  showTooltip
                  size="sm"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <Switch
                label="Muted State"
                description="Simulates muted audio feed visually"
                checked={isMuted}
                onChange={setIsMuted}
                size="sm"
              />
              <Switch
                label="Show Controls"
                description="Toggle hardware call-action control buttons below grid"
                checked={showControls}
                onChange={setShowControls}
                size="sm"
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Generated Configuration Code
          </span>
          <CodeBlock
            language="tsx"
            code={dynamicCode}
          />
        </div>
      </div>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { VoiceAgent } from '@unburn/ui/VoiceAgent';

export default function AudioScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <VoiceAgent
        status="speaking"
        variant="grid"
        onMuteToggle={() => console.log('Muted')}
        onDisconnect={() => console.log('Hangup')}
      />
    </div>
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={18} /> Additional Presets & Use Cases
        </h3>

        <Showcase
          title="Compact Status Indicator"
          description="A 5x5 micro grid visualizer with custom CSS variables, suitable for sidebars, cards, or user profile indicators."
          code={`import { VoiceAgent } from '@unburn/ui/VoiceAgent';

export default function CompactAvatar() {
  return (
    <VoiceAgent
      status="speaking"
      variant="grid"
      color="#c084fc"
      gridSize={{ rows: 5, cols: 5 }}
      showControls={false}
      dotSize={6}
      gridGap={4}
    />
  );
}`}
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '1rem' }}>
            <VoiceAgent
              status="speaking"
              variant="grid"
              color="#c084fc"
              gridSize={{ rows: 5, cols: 5 }}
              showControls={false}
              dotSize={6}
              gridGap={4}
            />
          </div>
        </Showcase>

        <Showcase
          title="Sleek Theme Variations"
          description="The voice agent adapts automatically to any raw Hex, RGB, HSL, or preset CSS variables."
          code={`import { VoiceAgent } from '@unburn/ui/VoiceAgent';

export default function ThemeGrid() {
  return (
    <div className="flex gap-4">
      <VoiceAgent status="speaking" color="#10b981" showControls={false} />
      <VoiceAgent status="listening" color="#f43f5e" showControls={false} />
      <VoiceAgent status="connecting" color="#fbbf24" showControls={false} />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', width: '100%', padding: '1rem', flexWrap: 'wrap' }}>
            <VoiceAgent
              status="speaking"
              variant="grid"
              color="#10b981"
              showControls={false}
            />
            <VoiceAgent
              status="listening"
              variant="grid"
              color="#f43f5e"
              showControls={false}
            />
            <VoiceAgent
              status="connecting"
              variant="grid"
              color="#fbbf24"
              showControls={false}
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'status', type: "'idle' | 'connecting' | 'listening' | 'speaking' | 'paused'", defaultValue: "'idle'", description: 'State of the voice agent. Controls the visual pattern simulation.' },
          { name: 'variant', type: "'grid'", defaultValue: "'grid'", description: 'Sets the layout variant. Only circle grid variant is supported currently.' },
          { name: 'color', type: 'string', defaultValue: 'undefined', description: 'Sets the theme color. Supports any custom CSS color string (hex, rgb, hsl, named color, etc.). Defaults to white in dark mode and black in light mode.' },
          { name: 'gridSize', type: '{ rows: number; cols: number }', defaultValue: '{ rows: 9, cols: 9 }', description: 'Sets the width and height count of LED nodes.' },
          { name: 'dotSize', type: 'number', defaultValue: '8', description: 'Sets the individual node (LED) diameter in pixels.' },
          { name: 'gridGap', type: 'number', defaultValue: '6', description: 'Sets the spacing gap between visualizer nodes.' },
          { name: 'pattern', type: "'wave' | 'blob' | 'ripple'", description: 'Override the visual algorithm (wave, circular blob, or ripple).' },
          { name: 'isMuted', type: 'boolean', defaultValue: 'false', description: 'Visual state change reflecting muted mic controls.' },
          { name: 'onMuteToggle', type: '() => void', description: 'Event handler triggered by the microphone capsule toggle click.' },
          { name: 'onDisconnect', type: '() => void', description: 'Event handler triggered by the hang-up button.' },
          { name: 'onOptionClick', type: '() => void', description: 'Event handler triggered by the settings (...) button.' },
          { name: 'showControls', type: 'boolean', defaultValue: 'true', description: 'Toggle control panel visibility below the grid.' },
        ]}
      />
    </>
  );
};
