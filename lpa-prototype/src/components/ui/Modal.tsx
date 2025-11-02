import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import Button from './Button';

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function Modal({ open, title, description, onClose, children, footer }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/90 p-8 shadow-glow dark:bg-ai-surface/90"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          >
            <header className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
                {description && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                    {description}
                  </p>
                )}
              </div>
              <Button variant="ghost" onClick={onClose} aria-label="Close dialog">
                ✕
              </Button>
            </header>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-200">
              {/* AI 元素：可在此区域嵌入 AI 助手对话 */}
              {children}
            </div>
            {footer && <footer className="mt-6 border-t border-white/10 pt-4">{footer}</footer>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
