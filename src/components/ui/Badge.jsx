import React from 'react';

const variants = {
  success: 'bg-green-500/20 text-green-500 border-green-500/30',
  warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
  danger: 'bg-red-500/20 text-red-500 border-red-500/30',
  info: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
  primary: 'bg-primary-500/20 text-primary-500 border-primary-500/30',
  secondary: 'bg-secondary-500/20 text-secondary-500 border-secondary-500/30',
};

function Badge({ children, variant = 'primary', className = '', ...props }) {
  return (
    <span
      className={`
        badge-premium
        ${variants[variant]}
        ${className}
        border
      `}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;