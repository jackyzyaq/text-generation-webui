import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIInvigilatorPanel from '../ai/AIInvigilatorPanel';

const alerts = [
  {
    id: 'alert-1',
    title: '异常移动',
    detail: '09:32 检测到考生离开座位 6 秒，自动触发语音提醒。', // 可替换数据
    status: '已处理'
  },
  {
    id: 'alert-2',
    title: '网络中断',
    detail: '09:41 出现 8 秒网络抖动，系统切换为离线答题模式。', // 可替换数据
    status: '观察中'
  }
];

const monitorGrid = [
  { id: 'feed-1', label: '主摄像头', quality: '1080p', latency: '62ms' }, // 可替换数据
  { id: 'feed-2', label: '侧摄像头', quality: '720p', latency: '85ms' }, // 可替换数据
  { id: 'feed-3', label: '屏幕录制', quality: '1080p', latency: '50ms' }, // 可替换数据
  { id: 'feed-4', label: '环境声波', quality: '44kHz', latency: '30ms' } // 可替换数据
];

export default function ProctorCenter() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="监考态势总览"
          subtitle="多源视频流与行为日志统一管控"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {monitorGrid.map((feed) => (
              <div
                key={feed.id}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-white shadow-glow"
              >
                <header className="flex items-center justify-between text-xs uppercase tracking-widest text-accent">
                  <span>{feed.label}</span>
                  <span>{feed.quality}</span>
                </header>
                <p className="mt-3 text-xs text-slate-300">延迟 {feed.latency}</p>
                <div className="mt-3 h-24 rounded-2xl bg-gradient-to-br from-primary-500/40 via-slate-900 to-slate-950"></div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>状态：稳定</span>
                  <Button variant="ghost" className="text-[10px] uppercase tracking-widest">
                    查看原始流
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <AIInvigilatorPanel />
      </div>
      <Card
        title="告警处理台"
        subtitle="AI 自动归类风险事件，支持人工复核"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
              >
                <header className="flex items-center justify-between text-xs uppercase tracking-widest text-primary-500">
                  <span>{alert.title}</span>
                  <span className="text-emerald-500">{alert.status}</span>
                </header>
                <p className="mt-3 text-slate-600 dark:text-slate-200/90">{alert.detail}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-300">
                  <Button variant="secondary" className="text-xs uppercase tracking-widest">
                    查看录像
                  </Button>
                  <Button variant="ghost" className="text-xs uppercase tracking-widest">
                    记录备注
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <section className="rounded-3xl border border-dashed border-white/20 bg-white/40 p-5 text-xs leading-relaxed text-slate-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">监考行动手册</h4>
            <ol className="mt-3 space-y-2 list-decimal pl-4">
              <li>确认告警截图与时间戳，避免误判。</li>
              <li>触发二次身份核验时同步通知考务老师。</li>
              <li>如连续出现 3 次切屏，系统自动锁屏，人工决定是否恢复。</li>
            </ol>
          </section>
        </div>
      </Card>
    </div>
  );
}
