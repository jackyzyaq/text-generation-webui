import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

const variants = {
  primary:
    'bg-primary-500 hover:bg-primary-400 text-white shadow-glow focus:ring-primary-300',
  secondary:
    'bg-secondary-500 hover:bg-secondary-400 text-white focus:ring-secondary-300',
  ghost: 'bg-transparent hover:bg-slate-800/40 text-accent'
};

type ButtonProps = {
  variant?: keyof typeof variants;
  icon?: ReactNode;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ripple = {
  tap: { scale: 0.98 },
  hover: { scale: 1.01 }
};

export default function Button({
  variant = 'primary',
  icon,
  loading,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent',
        variants[variant],
        className
      )}
      whileTap={ripple.tap}
      whileHover={ripple.hover}
      {...rest}
    >
      {loading && (
        <span className="h-2 w-2 animate-ping rounded-full bg-accent" aria-hidden />
      )}
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}
