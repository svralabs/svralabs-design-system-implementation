import React from 'react';

export default function StepIndicator({ stepNumber, isActive }) {
  const baseClasses = "w-12 h-12 border-2 border-on-background rounded-full flex items-center justify-center font-headline-sm text-headline-sm neubrutalism-shadow-sm";
  const activeClasses = "bg-primary-fixed";
  const inactiveClasses = "bg-surface-container-highest";

  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {stepNumber}
    </div>
  );
}
