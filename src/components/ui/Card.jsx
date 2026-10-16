import React from 'react';
import { motion } from 'framer-motion';

function Card({ 
  children, 
  className = '', 
  hover = true, 
  variant = 'default',
  ...props 
}) {
  const variants = {
    default: 'card-premium',
    dark: 'card-premium-dark',
    glass: 'glass-premium',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`
        ${variants[variant]} 
        ${className}
        border border-light-border/50 dark:border-dark-border/50
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;