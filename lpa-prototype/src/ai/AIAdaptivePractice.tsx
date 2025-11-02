import { useMemo, useState } from 'react';
import Button from '../components/ui/Button';

const practiceMatrix = [
  { difficulty: '进阶', focus: '算法复杂度', estimated: '18 分钟' }, // 可替换数据
  { difficulty: '巩固', focus: '系统设计题', estimated: '25 分钟' }, // 可替换数据
  { difficulty: '拔高', focus: '安全合规', estimated: '30 分钟' } // 可替换数据
];

export default function AIAdaptivePractice() {
  const [fatigue, setFatigue] = useState<'low' | 'mid' | 'high'>('mid');

  const recommendation = useMemo(() => {
    if (fatigue === 'low') return practiceMatrix[2];
    if (fatigue === 'high') return practiceMatrix[0];
    return practiceMatrix[1];
  }, [fatigue]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-6 text-left shadow-glow backdrop-blur">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">AI 自适应练习 {/* AI 元素 */}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">动态练习建议</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span>当前状态</span>
          <span className="rounded-full bg-slate-900/70 px-2 py-1 text-accent">{fatigue}</span>
        </div>
      </header>
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
        {(
          [
            { key: 'low', label: '精力充沛' },
            { key: 'mid', label: '正常' },
            { key: 'high', label: '轻微疲劳' }
          ] as const
        ).map((option) => (
          <Button
            key={option.key}
            variant={fatigue === option.key ? 'primary' : 'ghost'}
            className="w-full justify-center"
            onClick={() => setFatigue(option.key)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-slate-950/40 p-5 text-sm text-slate-200">
        <p className="text-xs uppercase tracking-widest text-slate-400">优先练习</p>
        <p className="mt-2 text-base font-semibold text-white">{recommendation.focus}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
          <span>难度档位</span>
          <span className="text-accent">{recommendation.difficulty}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
          <span>预计完成</span>
          <span>{recommendation.estimated}</span>
        </div>
        <Button className="mt-4 w-full justify-center">立即开始</Button>
      </div>
    </section>
  );
}
