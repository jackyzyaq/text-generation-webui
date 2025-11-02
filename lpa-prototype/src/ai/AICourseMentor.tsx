import { useState } from 'react';
import Button from '../components/ui/Button';

const mentorPrompts = [
  {
    id: 'outline',
    title: '章节重点回顾',
    response: '已为你提炼本节的三大核心概念，并标注对应练习题。' // 可替换数据
  },
  {
    id: 'qa',
    title: '生成答疑草稿',
    response: '根据班级常见问题，生成 2 条可直接发送的答疑回复模板。' // 可替换数据
  },
  {
    id: 'note',
    title: '知识点延伸',
    response: '补充该视频涉及的业界最佳实践案例，含风险提示。' // 可替换数据
  }
];

export default function AICourseMentor() {
  const [selected, setSelected] = useState(mentorPrompts[0]);

  return (
    <aside className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur">
      <h3 className="text-base font-semibold text-white">AI 课程助教 {/* AI 元素 */}</h3>
      <p className="mt-2 text-xs text-slate-300">
        智能助教会根据章节观看情况与互动数据，提供个性化的延伸建议。
      </p>
      <div className="mt-4 space-y-2">
        {mentorPrompts.map((prompt) => (
          <Button
            key={prompt.id}
            variant={prompt.id === selected.id ? 'primary' : 'ghost'}
            className="w-full justify-between text-xs"
            onClick={() => setSelected(prompt)}
          >
            {prompt.title}
            <span className="text-[10px] uppercase tracking-wide text-accent">AI</span>
          </Button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-slate-950/40 p-4 text-sm text-slate-200">
        <p className="font-semibold text-white">AI 输出</p>
        <p className="mt-2 leading-relaxed text-slate-300">{selected.response}</p>
      </div>
    </aside>
  );
}
