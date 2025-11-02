import { useState } from 'react';
import Button from '../components/ui/Button';

const suggestions = [
  {
    id: 'concept',
    title: '概念误区',
    detail: '建议重新回看「一致性协议」章节视频 05:12 - 08:45。' // 可替换数据
  },
  {
    id: 'practice',
    title: '练习补齐',
    detail: '为你匹配 3 道服务降级场景题，完成后将再评估掌握度。' // 可替换数据
  },
  {
    id: 'team',
    title: '协作建议',
    detail: '推荐与架构专家 @Nova 进行 15 分钟交流，快速厘清设计边界。' // 可替换数据
  }
];

export default function AIErrorInsight() {
  const [active, setActive] = useState(suggestions[0]);

  return (
    <section className="rounded-3xl border border-rose-300/30 bg-rose-500/10 p-6 text-left shadow-glow backdrop-blur">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-rose-200">AI 错题洞察 {/* AI 元素 */}</p>
          <h3 className="mt-1 text-lg font-semibold text-rose-50">纠错优先级</h3>
        </div>
        <Button variant="ghost" className="text-xs text-rose-100 hover:text-white" onClick={() => setActive(suggestions[0])}>
          重置
        </Button>
      </header>
      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className={`rounded-full px-4 py-2 text-xs transition ${
              active.id === item.id ? 'bg-rose-400/40 text-white shadow-glow' : 'bg-rose-400/10 text-rose-100 hover:bg-rose-400/20'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-rose-400/10 p-5 text-sm text-rose-50">
        <p className="font-semibold text-white">优先处理</p>
        <p className="mt-2 leading-relaxed text-rose-100">{active.detail}</p>
        <Button className="mt-4 w-full justify-center bg-rose-500 hover:bg-rose-400">安排复盘</Button>
      </div>
    </section>
  );
}
