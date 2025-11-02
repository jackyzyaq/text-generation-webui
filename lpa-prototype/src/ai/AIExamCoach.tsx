import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const hints = [
  {
    id: 'strategy',
    title: 'AI 答题策略建议',
    detail: '优先解决客观题确保基础分，再分配 12 分钟给案例题分段作答。', // 可替换数据
    action: '应用时间分配'
  },
  {
    id: 'knowledge',
    title: '知识点补齐',
    detail: '第 3 题涉及服务治理熔断策略，可复习《分布式容错》章节。', // 可替换数据
    action: '查看知识卡'
  },
  {
    id: 'emotion',
    title: '状态舒缓',
    detail: '检测到心率略高，建议进行 30 秒呼吸节奏调整，保持专注。', // 可替换数据
    action: '开启呼吸指导'
  }
];

export default function AIExamCoach() {
  const [current, setCurrent] = useState(hints[0]);

  const rotate = () => {
    const index = hints.indexOf(current);
    setCurrent(hints[(index + 1) % hints.length]);
  };

  return (
    <section className="rounded-3xl border border-primary-500/50 bg-primary-500/10 p-6 shadow-glow text-slate-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">AI 考试助手</p>
          <h3 className="mt-1 text-lg font-semibold text-white">实时策略提醒</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={rotate}>
          下一条
        </Button>
      </header>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-5 space-y-2 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm"
        >
          <h4 className="text-base font-semibold text-white">{current.title}</h4>
          <p className="text-slate-200/90">{current.detail}</p>
          <Button className="w-full justify-center text-xs uppercase tracking-widest">{current.action}</Button>
        </motion.div>
      </AnimatePresence>
      <p className="mt-4 text-xs text-slate-300">
        建议基于考生实时作答速度、错题标签与摄像头情绪识别生成。 {/* 可替换数据 */}
      </p>
    </section>
  );
}
