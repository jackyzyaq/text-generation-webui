import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIGradingAssistant from '../ai/AIGradingAssistant';

const reviewQueue = [
  {
    id: 'paper-091',
    candidate: '张琳',
    score: '82',
    status: 'AI 初评完成',
    remark: '存在主观题争议，等待人工复核。' // 可替换数据
  },
  {
    id: 'paper-092',
    candidate: '李昊',
    score: '88',
    status: '人工复核中',
    remark: '案例分析题需要补充关键字说明。' // 可替换数据
  }
];

const arbitrationSteps = [
  { stage: 'AI 初评', owner: '评分引擎', duration: '1m20s' }, // 可替换数据
  { stage: '人工复核', owner: '阅卷专家', duration: '5m32s' }, // 可替换数据
  { stage: '仲裁确认', owner: '教研主任', duration: '2m10s' } // 可替换数据
];

export default function GradingCenter() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="阅卷工单"
          subtitle="AI 初评 + 人工复核 + 仲裁全链路"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="space-y-4">
            {reviewQueue.map((paper) => (
              <div
                key={paper.id}
                className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
              >
                <header className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-primary-500">
                  <span>{paper.id}</span>
                  <span>候选人：{paper.candidate}</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-400">{paper.status}</span>
                </header>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-200/90">
                  <span>AI 评分：{paper.score}</span>
                  <Button variant="ghost" className="text-xs uppercase tracking-widest">
                    查看详情
                  </Button>
                </div>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">{paper.remark}</p>
              </div>
            ))}
          </div>
        </Card>
        <AIGradingAssistant />
      </div>
      <Card
        title="仲裁流程轨迹"
        subtitle="每一步均记录在案，可导出审计报表"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {arbitrationSteps.map((step) => (
            <div
              key={step.stage}
              className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{step.stage}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-200/90">责任人：{step.owner}</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">耗时 {step.duration}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-dashed border-white/20 bg-white/40 p-4 text-xs leading-relaxed text-slate-600 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300">
          所有阅卷记录支持导出 JSON、PDF，以对接内部审计与质检流程。 {/* 可替换数据 */}
        </div>
      </Card>
    </div>
  );
}
