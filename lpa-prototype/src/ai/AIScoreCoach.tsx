import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const focusAreas = [
  {
    id: 'architecture',
    title: '架构设计题',
    delta: '+6.8%',
    plan: '建议复训微服务故障演练，提升异常处置题型表现。' // 可替换数据
  },
  {
    id: 'security',
    title: '安全合规题',
    delta: '+3.1%',
    plan: '强化 PBKDF2 与数据脱敏实践，补齐法规应用案例。' // 可替换数据
  },
  {
    id: 'team',
    title: '团队协作题',
    delta: '+9.4%',
    plan: 'AI 建议跟进 OKR 制定模板，补足跨部门沟通场景。' // 可替换数据
  }
];

export default function AIScoreCoach() {
  const [selected, setSelected] = useState(focusAreas[0]);

  return (
    <section className="rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 shadow-glow text-sky-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-sky-300">AI 成绩复盘</p>
          <h3 className="mt-1 text-lg font-semibold text-white">提升路径建议</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={() => setSelected(focusAreas[1])}>
          快速跳转
        </Button>
      </header>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {focusAreas.map((area) => (
          <motion.button
            key={area.id}
            onClick={() => setSelected(area)}
            whileHover={{ scale: 1.01 }}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
              selected.id === area.id
                ? 'border-sky-300 bg-sky-400/20 text-white'
                : 'border-white/10 bg-white/5 text-sky-100/80 hover:border-sky-300/50'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest">
              <span>{area.title}</span>
              <span className="font-semibold text-emerald-200">预测提升 {area.delta}</span>
            </div>
            {selected.id === area.id && <p className="mt-2 leading-relaxed">{area.plan}</p>}
          </motion.button>
        ))}
      </div>
      <p className="mt-5 text-xs text-sky-100/80">
        建议结合知识点掌握度、练习错题率与班级对比曲线推算。 {/* 可替换数据 */}
      </p>
    </section>
  );
}
