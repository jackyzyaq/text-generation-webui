import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIAnomalyInsights from '../ai/AIAnomalyInsights';

const escalationQueue = [
  {
    id: 'case-2401',
    title: '网络抖动补考申请',
    detail: '考生在第 45 分钟出现断线 12 秒，系统自动保存答题。', // 可替换数据
    status: '待审核'
  },
  {
    id: 'case-2402',
    title: '切屏判定申诉',
    detail: '监测到三次切屏，考生提交会议通知截图作为证明。', // 可替换数据
    status: '处理中'
  }
];

const recoveryFlows = [
  {
    id: 'step-1',
    title: '断线重连',
    action: 'AI 自动切换至离线缓存，10 秒内完成数据回填。', // 可替换数据
    sla: 'SLA 30 秒'
  },
  {
    id: 'step-2',
    title: '补考排期',
    action: '根据题库版本与监考资源自动匹配时段。', // 可替换数据
    sla: 'SLA 4 小时'
  },
  {
    id: 'step-3',
    title: '申诉仲裁',
    action: 'AI 给出行为追踪证据链，人工复核后执行仲裁。', // 可替换数据
    sla: 'SLA 24 小时'
  }
];

export default function ExceptionDesk() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="异常处理工作台"
          subtitle="统一管理断线重连、补考与申诉流程"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {escalationQueue.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
              >
                <header className="flex items-center justify-between text-xs uppercase tracking-widest text-primary-500">
                  <span>{item.id}</span>
                  <span className="text-emerald-500">{item.status}</span>
                </header>
                <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="mt-2 text-slate-600 dark:text-slate-200/90">{item.detail}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-300">
                  <Button variant="secondary" className="text-xs uppercase tracking-widest">
                    打开流程
                  </Button>
                  <Button variant="ghost" className="text-xs uppercase tracking-widest">
                    添加批注
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <AIAnomalyInsights />
      </div>
      <Card
        title="恢复流程 SOP"
        subtitle="AI 生成步骤+人工确认，确保学员体验"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {recoveryFlows.map((flow) => (
            <div
              key={flow.id}
              className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{flow.title}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-200/90">{flow.action}</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">服务指标：{flow.sla}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
