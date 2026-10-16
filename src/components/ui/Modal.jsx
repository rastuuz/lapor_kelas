import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Modal({ isOpen, onClose, children, title, size = 'md' }) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`
                ${sizes[size]} 
                w-full glass-premium-dark rounded-2xl shadow-premium-lg
                border border-dark-border/50
                max-h-[90vh] overflow-y-auto
              `}
            >
              <div className="flex items-center justify-between p-6 border-b border-dark-border/50">
                <h3 className="text-xl font-bold text-gradient">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <XMarkIcon className="w-6 h-6 text-dark-muted" />
                </button>
              </div>
              <div className="p-6">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;