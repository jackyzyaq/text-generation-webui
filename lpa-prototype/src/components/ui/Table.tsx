import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyState?: ReactNode;
}

export default function Table<T extends Record<string, unknown>>({
  columns,
  data,
  emptyState
}: TableProps<T>) {
  if (data.length === 0 && emptyState) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-sm text-slate-500 dark:bg-ai-surface/40 dark:text-slate-300">
        {emptyState}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/80 dark:bg-ai-surface/70">
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-white/10 text-left">
          <thead className="bg-white/40 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5 dark:text-slate-300">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  scope="col"
                  className={clsx('px-6 py-3 font-semibold', column.width)}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-slate-600 dark:text-slate-200">
            {data.map((row) => (
              <tr key={String(row[columns[0].key])} className="hover:bg-primary-500/5">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-6 py-4">
                    {column.render ? column.render(row[column.key], row) : (row[column.key] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 p-4 md:hidden">
        {data.map((row, rowIndex) => (
          <article
            key={String(rowIndex)}
            className="rounded-2xl border border-white/10 bg-white/70 p-4 shadow-inner dark:bg-white/5"
          >
            {columns.map((column) => (
              <div key={String(column.key)} className="flex justify-between py-1 text-sm">
                <span className="font-medium text-slate-500 dark:text-slate-300">
                  {column.header}
                </span>
                <span className="text-right text-slate-700 dark:text-slate-100">
                  {column.render ? column.render(row[column.key], row) : (row[column.key] as ReactNode)}
                </span>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
