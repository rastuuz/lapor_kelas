import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'btn-premium',
  secondary: 'btn-outline-premium',
  ghost: 'text-primary-600 dark:text-primary-400 hover:bg-primary-500/10 px-4 py-2 rounded-xl transition-all duration-300',
  danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${className} 
        ${loading ? 'opacity-70 cursor-wait' : ''}
        flex items-center justify-center gap-2
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}

export default Button;