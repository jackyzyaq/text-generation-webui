import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIExamCoach from '../ai/AIExamCoach';

const objectiveQuestions = [
  { id: 'Q1', title: '微服务降级策略的核心目标是？', status: '完成' }, // 可替换数据
  { id: 'Q2', title: 'PBKDF2 算法的安全参数选择主要考虑？', status: '未完成' }, // 可替换数据
  { id: 'Q3', title: '监考切屏触发后应执行的动作是？', status: '收藏' } // 可替换数据
];

const writingPrompts = [
  {
    id: 'essay-1',
    title: '设计 AI 驱动的学习闭环方案',
    rubric: '需覆盖用户画像、内容推荐、反馈评估', // 可替换数据
    wordLimit: '800-1200'
  }
];

export default function ExamInterface() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[2.2fr_1fr]">
        <Card
          title="考试作答区域"
          subtitle="客观题 + 主观题混合，实时保存状态"
          className="bg-white/90 dark:bg-slate-900/70"
          footer={
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-300">
              <span>最后保存：09:21:34</span> {/* 可替换数据 */}
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" className="text-xs uppercase tracking-widest">
                  标记稍后
                </Button>
                <Button className="text-xs uppercase tracking-widest">提交试卷</Button>
              </div>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-2xl border border-white/10 bg-white/50 p-4 dark:bg-slate-900/40">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">客观题</h4>
              <ul className="mt-3 space-y-3 text-sm">
                {objectiveQuestions.map((question) => (
                  <li
                    key={question.id}
                    className="rounded-2xl border border-white/10 bg-white/70 px-4 py-3 text-slate-700 shadow-sm transition hover:border-accent/50 dark:bg-slate-900/60 dark:text-slate-200"
                  >
                    <p className="text-xs uppercase tracking-widest text-primary-500">{question.id}</p>
                    <p className="mt-1 text-sm leading-snug">{question.title}</p>
                    <p className="mt-2 text-xs text-emerald-500">状态：{question.status}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl border border-dashed border-white/20 bg-white/30 p-3 text-xs leading-relaxed text-slate-600 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300">
                倒计时：42:18 {/* 可替换数据 */}
                <br />
                自动保存间隔 30 秒。
              </div>
            </aside>
            <div className="space-y-4">
              {writingPrompts.map((prompt) => (
                <section
                  key={prompt.id}
                  className="rounded-3xl border border-white/10 bg-white/70 p-6 text-sm leading-relaxed text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
                >
                  <header className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary-500">主观题</p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{prompt.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/40 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900/50 dark:text-slate-300">
                      字数限制 {prompt.wordLimit}
                    </span>
                  </header>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-200/90">评分要点：{prompt.rubric}</p>
                  <textarea
                    className="mt-4 min-h-[200px] w-full rounded-2xl border border-white/20 bg-white/80 p-4 text-sm text-slate-800 shadow-inner focus:border-accent/50 focus:outline-none dark:bg-slate-900/70 dark:text-slate-100"
                    placeholder="请在此输入答题内容..."
                  />
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-300">
                    <span>当前字数：356</span> {/* 可替换数据 */}
                    <Button variant="secondary" className="text-xs uppercase tracking-widest">
                      插入参考资料
                    </Button>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-1 gap-6">
          <Card
            title="考试状态监测"
            subtitle="摄像监控、网络与键鼠轨迹"
            className="bg-white/80 dark:bg-slate-900/60"
          >
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/40 p-3 dark:bg-slate-900/50">
                <span className="text-slate-600 dark:text-slate-200">心率监测</span>
                <span className="text-emerald-500">72 bpm</span> {/* 可替换数据 */}
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/40 p-3 dark:bg-slate-900/50">
                <span className="text-slate-600 dark:text-slate-200">键鼠稳定度</span>
                <span className="text-emerald-500">正常</span> {/* 可替换数据 */}
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/40 p-3 dark:bg-slate-900/50">
                <span className="text-slate-600 dark:text-slate-200">切屏告警</span>
                <span className="text-amber-400">1 次</span> {/* 可替换数据 */}
              </div>
            </div>
          </Card>
          <AIExamCoach />
        </div>
      </div>
    </div>
  );
}
