import React from 'react';

export default function Spinner({ size = 'md', color = 'primary' }) {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info',
    success: 'text-success',
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeMap[size]} ${colorMap[color]}`} />
  );
}
