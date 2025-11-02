import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const coursePool = [
  { id: 'course-ml', title: '机器学习实战', focus: '模型评估', trend: '+12%' }, // 可替换数据
  { id: 'course-nlp', title: '自然语言处理精要', focus: 'Prompt 工程', trend: '+18%' }, // 可替换数据
  { id: 'course-arch', title: '系统架构设计', focus: '服务稳定性', trend: '+9%' } // 可替换数据
];

export default function AIRecommendationPanel() {
  const [highlight, setHighlight] = useState(coursePool[0]);

  const rotateRecommendation = () => {
    const nextIndex = (coursePool.indexOf(highlight) + 1) % coursePool.length;
    setHighlight(coursePool[nextIndex]);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left shadow-glow backdrop-blur">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">AI 学习推荐 {/* AI 元素 */}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">下一步学习目标</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={rotateRecommendation}>
          换一组
        </Button>
      </header>
      <AnimatePresence mode="wait">
        <motion.div
          key={highlight.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-6 space-y-3 rounded-2xl bg-slate-950/30 p-5 text-sm text-slate-200"
        >
          <p className="text-base font-semibold text-white">{highlight.title}</p>
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-400">
            <span>补强方向</span>
            <span className="text-accent">{highlight.focus}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>完成率增幅</span>
            <span className="font-semibold text-emerald-400">{highlight.trend}</span>
          </div>
          <Button className="mt-2 w-full justify-center">进入推荐计划</Button>
        </motion.div>
      </AnimatePresence>
      <p className="mt-4 text-xs text-slate-400">
        * AI 推荐基于知识图谱、练习表现与同侪进度综合生成 {/* 可替换数据 */}
      </p>
    </section>
  );
}
