import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Table from '../components/ui/Table';
import AIAdaptivePractice from '../ai/AIAdaptivePractice';

const dailyTasks = [
  { id: 'd1', focus: '算法与数据结构', duration: '20 分钟', status: '待完成' }, // 可替换数据
  { id: 'd2', focus: '系统设计场景题', duration: '15 分钟', status: '进行中' } // 可替换数据
];

const knowledgeMatrix = [
  { domain: '微服务', mastery: '72%', priority: '高' }, // 可替换数据
  { domain: '可观测性', mastery: '64%', priority: '中' }, // 可替换数据
  { domain: '安全合规', mastery: '58%', priority: '高' } // 可替换数据
];

export default function PracticeCenter() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">练习中心</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">每日练 · 自选练 · 错题本</h2>
            <p className="mt-2 text-sm text-slate-300">
              AI 将实时调整题目难度与知识点补齐策略，帮助你保持 85%+ 的掌握率。 {/* AI 元素 */}
            </p>
          </div>
          <Button variant="secondary">开始专注练习</Button>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card title="今日练习计划" subtitle="系统为你排列最合适的题组">
            <ul className="space-y-3 text-sm text-slate-200">
              {dailyTasks.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="font-semibold text-white">{task.focus}</p>
                    <p className="text-xs text-slate-400">预计 {task.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-200">{task.status}</span>
                    <Button variant="ghost">进入</Button>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="自选练习" subtitle="根据能力模型挑选题库">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card title="知识点挑战" subtitle="挑选特定知识点进行强化">
                <div className="space-y-3 text-sm text-slate-200">
                  <p>• 支持组合多知识点。</p>
                  <p>• 可设置题量与计时模式。</p>
                  <Button variant="ghost">配置题组</Button>
                </div>
              </Card>
              <Card title="模拟考试" subtitle="按考纲自动生成套题">
                <div className="space-y-3 text-sm text-slate-200">
                  <p>• 支持客观 + 主观题混合。</p>
                  <p>• 自动生成评分参考。</p>
                  <Button variant="ghost">安排模拟</Button>
                </div>
              </Card>
            </div>
          </Card>
          <Card title="掌握度矩阵" subtitle="AI 每晚 02:00 自动刷新">
            <Table
              columns={[
                { key: 'domain', header: '知识域' },
                { key: 'mastery', header: '掌握度' },
                { key: 'priority', header: '补强优先级' }
              ]}
              data={knowledgeMatrix}
            />
          </Card>
        </div>
        <div className="space-y-6">
          <AIAdaptivePractice />
          <Card title="错题复盘" subtitle="来自错题本的高频知识点">
            <div className="space-y-3 text-sm text-slate-200">
              <p>• 最近 7 天错题集中在服务熔断策略。</p>
              <p>• 建议在 24 小时内完成复盘以提升记忆。</p>
              <Button variant="ghost">进入错题本</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
