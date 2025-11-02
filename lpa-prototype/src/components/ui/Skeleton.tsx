import clsx from 'clsx';

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: string;
}

export default function Skeleton({
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded-full'
}: SkeletonProps) {
  return (
    <div
      className={clsx(
        'animate-pulse bg-gradient-to-r from-white/20 via-white/40 to-white/20 bg-[length:200px_100%]',
        width,
        height,
        rounded
      )}
    />
  );
}
