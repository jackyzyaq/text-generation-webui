import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIDeviceScanner from '../ai/AIDeviceScanner';

const checkSteps = [
  {
    id: 'identity',
    title: '身份核验',
    detail: '身份证 + 人脸比对，支持双因子确认。', // 可替换数据
    status: '已通过'
  },
  {
    id: 'environment',
    title: '考试环境',
    detail: '背景噪声 < 35db，环境亮度 420lux。', // 可替换数据
    status: '建议优化'
  },
  {
    id: 'software',
    title: '考试客户端',
    detail: '安全插件、截屏监控、进程黑名单全部激活。', // 可替换数据
    status: '已通过'
  }
];

const timeline = [
  { time: '09:00', event: '开启考前引导', owner: 'AI 监考助手' }, // 可替换数据
  { time: '09:05', event: '完成人脸校准', owner: '考生' }, // 可替换数据
  { time: '09:10', event: '网络稳定性确认', owner: '平台' } // 可替换数据
];

export default function PreExamCheck() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="考前准备流程"
          subtitle="覆盖设备检测、身份核验与规则确认"
          className="bg-white/90 dark:bg-slate-900/70"
          footer={
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-300">
              <span>预计耗时 12 分钟</span> {/* 可替换数据 */}
              <Button className="text-xs uppercase tracking-widest">导出核验清单</Button>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {checkSteps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl border border-white/10 bg-white/40 p-4 text-sm text-slate-700 shadow-sm dark:bg-slate-800/70 dark:text-slate-200"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-primary-500">
                  <span>{step.title}</span>
                  <span className="font-semibold text-emerald-500">{step.status}</span>
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-200/90">{step.detail}</p>
              </div>
            ))}
          </div>
          <section className="mt-6 rounded-2xl border border-dashed border-white/20 bg-white/30 p-4 text-xs leading-relaxed text-slate-600 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">考生须知</h4>
            <ul className="mt-3 space-y-2">
              <li>• 考试开始前 10 分钟进入系统完成全部核验步骤。</li>
              <li>• 关闭 VPN、远程桌面等程序，确保单屏环境。</li>
              <li>• 使用平台提供的安全浏览器，避免快捷键切屏。</li>
            </ul>
          </section>
        </Card>
        <AIDeviceScanner />
      </div>
      <Card
        title="考前时间线"
        subtitle="AI 自动推进各环节并记录审计日志"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {timeline.map((item) => (
            <div
              key={item.time}
              className="rounded-2xl border border-white/10 bg-white/50 p-4 text-sm text-slate-700 shadow dark:bg-slate-800/70 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{item.time}</p>
              <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{item.event}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">责任人：{item.owner}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
