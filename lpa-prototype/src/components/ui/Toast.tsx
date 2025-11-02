import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Button from './Button';

interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  description?: string;
  action?: ReactNode;
  onClose?: () => void;
}

const toneStyles: Record<NonNullable<ToastProps['tone']>, string> = {
  info: 'border-primary-400 bg-primary-500/10 text-primary-200',
  success: 'border-success/70 bg-success/10 text-success/70',
  warning: 'border-warning/80 bg-warning/10 text-warning/80',
  danger: 'border-danger/80 bg-danger/10 text-danger/80'
};

export default function Toast({ tone = 'info', title, description, action, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className={`fixed bottom-8 right-8 z-50 w-full max-w-sm rounded-2xl border px-5 py-4 shadow-lg backdrop-blur ${toneStyles[tone]} md:right-8 md:bottom-8`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold">{title}</p>
          {description && <p className="mt-1 text-xs opacity-80">{description}</p>}
          {/* AI 元素：可插入实时学习洞察 */}
        </div>
        {onClose && (
          <Button variant="ghost" onClick={onClose} className="-mr-2 -mt-2 text-xs">
            关闭
          </Button>
        )}
      </div>
      {action && <div className="mt-3">{action}</div>}
    </motion.div>
  );
}
