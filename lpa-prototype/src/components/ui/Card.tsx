import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  footer?: ReactNode;
}

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

export default function Card({
  title,
  subtitle,
  className,
  children,
  footer
}: CardProps) {
  return (
    <motion.article
      initial="initial"
      animate="animate"
      exit="exit"
      variants={cardVariants}
      className={clsx(
        'flex h-full flex-col rounded-3xl border border-white/5 bg-white/80 p-6 shadow-2xl shadow-primary-900/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-glow dark:bg-ai-surface/70',
        className
      )}
    >
      {(title || subtitle) && (
        <header className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-300">{subtitle}</p>
          )}
        </header>
      )}
      <div className="flex-1 text-sm text-slate-600 dark:text-slate-200">{children}</div>
      {footer && <footer className="mt-6 border-t border-white/10 pt-4">{footer}</footer>}
    </motion.article>
  );
}
