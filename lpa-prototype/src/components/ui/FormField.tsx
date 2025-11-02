import type { ReactNode } from 'react';
import clsx from 'clsx';

interface FormFieldProps {
  label: string;
  hint?: string;
  required?: boolean;
  input: ReactNode;
  error?: string;
  inline?: boolean;
}

export default function FormField({
  label,
  hint,
  required,
  input,
  error,
  inline
}: FormFieldProps) {
  return (
    <label className={clsx('flex w-full flex-col gap-2', inline && 'md:flex-row md:items-center')}>
      <span className="text-sm font-medium text-slate-600 dark:text-slate-200">
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </span>
      <div className="flex-1">
        <div className="relative">
          {input}
          {/* AI 元素：可接入智能纠错与提示 */}
          {hint && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-danger">{error}</p>}
      </div>
    </label>
  );
}
