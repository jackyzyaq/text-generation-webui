import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Table from '../components/ui/Table';
import AIRecommendationPanel from '../ai/AIRecommendationPanel';

const courseProgress = [
  {
    title: '智能系统架构 101',
    status: '进行中',
    progress: 68,
    mentor: 'AI 教研助手', // 可替换数据
    cadence: '每周二·周四'
  },
  {
    title: 'Prompt 工程实战',
    status: '待启动',
    progress: 0,
    mentor: 'AI 学习教练', // 可替换数据
    cadence: '每周六'
  },
  {
    title: '安全合规加速营',
    status: '进行中',
    progress: 32,
    mentor: 'AI 合规助手', // 可替换数据
    cadence: '每周一'
  }
];

const schedule = [
  { date: '03-18', course: '系统架构 101', task: '复盘 CAP 案例' }, // 可替换数据
  { date: '03-19', course: 'Prompt 工程', task: '完成对话调优练习' }, // 可替换数据
  { date: '03-20', course: '安全合规', task: '模拟考试第 1 节' } // 可替换数据
];

export default function LearningHomeEmpty() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="欢迎回来，继续你的学习轨道"
          subtitle="AI 将结合练习结果与企业考核节点动态刷新计划。"
          className="relative overflow-hidden"
          footer={
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">今日建议行动</p>
                <p className="text-slate-500 dark:text-slate-300">
                  先完成架构课程复盘，再进行 15 分钟 Prompt 精准练习。
                </p>
              </div>
              <Button>开始学习旅程</Button>
            </div>
          }
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {courseProgress.map((course) => (
              <Card
                key={course.title}
                title={course.title}
                subtitle={`状态：${course.status}`}
                className="bg-gradient-to-br from-white/90 to-white/60 dark:from-ai-surface/80 dark:to-ai-surface/50"
                footer={
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-300">
                    <span>导师：{course.mentor}</span>
                    <span>{course.cadence}</span>
                  </div>
                }
              >
                <p className="text-xs uppercase tracking-widest text-accent">学习进度</p>
                <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-primary-500 shadow-glow"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
                  下次提醒时间：{course.cadence}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">学习节奏</h4>
            <Table
              columns={[
                { key: 'date', header: '日期' },
                { key: 'course', header: '课程' },
                { key: 'task', header: '任务' }
              ]}
              data={schedule}
            />
          </div>
        </Card>
        <div className="space-y-6">
          <AIRecommendationPanel />
          <Card title="学习亮点" subtitle="数据来自最近 7 天的练习表现">
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="rounded-2xl border border-primary-500/40 bg-primary-500/10 p-4">
                Prompt 练习命中率较上周提升 24%，推荐继续使用高准确度模版。 {/* 可替换数据 */}
              </li>
              <li className="rounded-2xl border border-secondary-500/40 bg-secondary-500/10 p-4">
                夜间 21:00-22:00 的学习投入度最高，保持该黄金时间。
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="待办清单" subtitle="今日优先事项由 AI 教练自动生成">
          <ul className="space-y-4 text-sm text-slate-200">
            <li className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="font-medium text-white">完成「系统架构 101」章节测验</p>
                <p className="text-xs text-slate-400">预计耗时 18 分钟，完成后自动解锁进阶练习。</p>
              </div>
              <Button variant="ghost">去完成</Button>
            </li>
            <li className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="font-medium text-white">整理昨日学习笔记</p>
                <p className="text-xs text-slate-400">同步到团队知识库后，可触发导师点评。</p>
              </div>
              <Button variant="ghost">立即记录</Button>
            </li>
          </ul>
        </Card>
        <Card title="学习社区" subtitle="与同伴保持协作反馈">
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
              <span>#Prompt-Clinic</span>
              <Button variant="ghost">参与</Button>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
              <span>#架构答疑</span>
              <Button variant="ghost">预约</Button>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
