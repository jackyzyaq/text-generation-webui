import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Skeleton from '../components/ui/Skeleton';
import Table from '../components/ui/Table';

const tableColumns = [
  { key: 'course', header: '课程', width: 'w-1/3' },
  { key: 'progress', header: '进度' },
  { key: 'aiInsight', header: 'AI 智能建议' }
] as const;

type ProgressRow = {
  course: string;
  progress: string;
  aiInsight: string;
};

const emptyData: ProgressRow[] = [];

export default function LearningHomeEmpty() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card
          title="欢迎来到智能学习空间"
          subtitle="AI 将根据你的能力图谱，为你自动生成专属学习路径。" // 可替换数据
        >
          <div className="flex flex-col gap-6 lg:flex-row">
            <motion.div
              className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm text-slate-200">
                你还没有开始任何课程。启动 <span className="text-accent">AI 导学</span>{' '}
                获取个性化推荐。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1" onClick={() => null}>
                  立即生成学习计划 {/* AI 元素 */}
                </Button>
                <Button variant="ghost" className="flex-1" onClick={() => null}>
                  浏览课程库
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex w-full max-w-sm flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">AI 推荐亮点</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <Skeleton width="w-10" height="h-10" rounded="rounded-2xl" />
                    <div>
                      <p className="text-sm font-medium">知识掌握度图谱</p>
                      <p className="text-xs text-slate-400">
                        {/* AI 元素：实时掌握度预测 */}
                        即将接入个人学习画像
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Skeleton width="w-10" height="h-10" rounded="rounded-2xl" />
                    <div>
                      <p className="text-sm font-medium">学习行为脉冲</p>
                      <p className="text-xs text-slate-400">记录你的专注时长与活跃时段</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Button variant="secondary" className="w-full">
                查看 AI 推荐
              </Button>
            </motion.div>
          </div>
        </Card>
        <Card title="学习里程碑" subtitle="完成课程后自动生成沉浸式时间线。">
          <div className="space-y-4">
            <Skeleton height="h-6" width="w-2/3" />
            <Skeleton height="h-4" />
            <Skeleton height="h-4" width="w-5/6" />
            <Skeleton height="h-4" width="w-3/4" />
          </div>
        </Card>
      </section>

      <section className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">学习进度快照</h2>
            <p className="text-sm text-slate-300">
              启动任一课程后，AI 将自动跟踪你的知识薄弱点。
            </p>
          </div>
          <Button variant="ghost" className="self-start sm:self-auto">
            导出学习报告
          </Button>
        </div>
        <Table<ProgressRow>
          columns={tableColumns.map((column) => ({ ...column }))}
          data={emptyData}
          emptyState={
            <div className="space-y-2">
              <p>暂无学习记录。</p>
              <p className="text-sm text-slate-400">
                {/* AI 元素：AI 将在此推送实时调整策略 */}
                完成首个任务后将开启智能评估。
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
}
