import React from 'react';
import { cn } from '../../lib/utils';
import './ActionButton.css';

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const ActionButton: React.FC<ActionButtonProps> = ({ className, ...props }) => {
  return <button className={cn("unburn-action-btn", className)} {...props} />;
};
