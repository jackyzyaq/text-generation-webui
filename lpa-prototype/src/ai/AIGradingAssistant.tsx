import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const rubric = [
  { id: 'logic', label: '逻辑结构', score: 28, suggestion: '建议补充案例推理链条，增加对比维度。' }, // 可替换数据
  { id: 'innovation', label: '创新亮点', score: 22, suggestion: '可以引用项目中的数据指标，突出创新性。' }, // 可替换数据
  { id: 'compliance', label: '合规要点', score: 18, suggestion: '确认是否引用了最新安全政策条款。' } // 可替换数据
];

export default function AIGradingAssistant() {
  const [focusId, setFocusId] = useState(rubric[0].id);

  return (
    <section className="rounded-3xl border border-purple-500/40 bg-purple-500/10 p-6 text-purple-100 shadow-glow">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-purple-300">AI 阅卷助手</p>
          <h3 className="mt-1 text-lg font-semibold text-white">自动评分矩阵</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={() => setFocusId(rubric[1].id)}>
          跳转维度
        </Button>
      </header>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {rubric.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setFocusId(item.id)}
            whileHover={{ scale: 1.01 }}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
              focusId === item.id
                ? 'border-purple-300 bg-purple-400/20 text-white'
                : 'border-white/10 bg-white/5 text-purple-100/80 hover:border-purple-300/50'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest">
              <span>{item.label}</span>
              <span className="font-semibold">得分 {item.score} / 30</span>
            </div>
            {focusId === item.id && <p className="mt-2 text-sm leading-relaxed">{item.suggestion}</p>}
          </motion.button>
        ))}
      </div>
      <footer className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-purple-100/80">
        AI 初评结合 NLP 语义评分、关键词覆盖度与历史阅卷打分模型生成。 {/* 可替换数据 */}
      </footer>
    </section>
  );
}
