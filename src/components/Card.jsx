import React from 'react';

export default function Card({ children, padding = 'md', elevation = 'md' }) {
  const paddingMap = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const elevationMap = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  return (
    <div className={`bg-surface rounded-lg ${paddingMap[padding]} ${elevationMap[elevation]}`}>
      {children}
    </div>
  );
}
