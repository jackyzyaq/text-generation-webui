import { motion } from 'framer-motion';

const pulseVariants = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export default function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary-500/40 blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[160px]"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.2),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(130,187,255,0.25),transparent_55%)]"
        animate={{ opacity: [0.7, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
      />
      {/* AI 元素：用于展示神经网络视觉脉冲 */}
    </div>
  );
}
