import React from 'react';

const Button = ({ variant, size, children, disabled, loading, icon }) => {
  const baseClasses = 'rounded-full border-2 border-on-surface hard-shadow-sm neubrutal-hover font-label uppercase transition-all';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-surface-bright text-on-surface',
    ghost: 'bg-transparent text-on-surface border-transparent hover:border-on-surface',
    disabled: 'bg-disabled text-disabled-content border-disabled',
  };
  const sizeClasses = {
    large: 'px-12 py-6',
    medium: 'px-8 py-4',
    small: 'px-6 py-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={classes} disabled={disabled || loading}>
      {loading ? (
        <span className="material-symbols-outlined animate-spin">progress_activity</span>
      ) : (
        <>
          {icon && <span className="material-symbols-outlined mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
