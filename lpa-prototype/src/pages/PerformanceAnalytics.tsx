import Card from '../components/ui/Card';
import AIScoreCoach from '../ai/AIScoreCoach';

const trendData = [
  { label: '周一', score: 78 },
  { label: '周三', score: 82 },
  { label: '周五', score: 88 },
  { label: '周日', score: 91 }
];

const radarSkills = [
  { label: 'AI 应用', value: 82 },
  { label: '架构设计', value: 76 },
  { label: '安全合规', value: 69 },
  { label: '运营管理', value: 74 },
  { label: '协作沟通', value: 88 }
];

const distribution = [
  { name: '优秀', percent: 32 },
  { name: '良好', percent: 48 },
  { name: '待提升', percent: 20 }
];

export default function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="成绩趋势"
          subtitle="按周维度展示学员平均得分"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">折线趋势</h4>
              <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-primary-500/30 via-slate-900 to-slate-950">
                <div className="flex h-full items-end justify-between gap-2 px-4 pb-4">
                  {trendData.map((item) => (
                    <div key={item.label} className="flex flex-1 flex-col items-center">
                      <span className="h-full w-4 rounded-full bg-accent/40" style={{ height: `${item.score}%` }} />
                      <span className="mt-2 text-xs text-white/80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">雷达技能分布</h4>
              <div className="mt-4 grid grid-cols-1 gap-3 text-xs text-slate-600 dark:text-slate-300">
                {radarSkills.map((skill) => (
                  <div key={skill.label} className="flex items-center justify-between gap-3">
                    <span>{skill.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/30">
                      <div className="h-full rounded-full bg-primary-500/60" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="w-10 text-right">{skill.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Card>
        <AIScoreCoach />
      </div>
      <Card
        title="成绩段位分布"
        subtitle="AI 自动生成趋势解读"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {distribution.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{item.name}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{item.percent}%</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">相比上周 +{Math.round(item.percent / 5)}%</p> {/* 可替换数据 */}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
