import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AICourseMentor from '../ai/AICourseMentor';

const outline = [
  { id: '1', title: '服务降级策略', duration: '12:36' }, // 可替换数据
  { id: '2', title: '熔断与限流设计', duration: '18:21' }, // 可替换数据
  { id: '3', title: '自动化监控与告警', duration: '09:45' } // 可替换数据
];

const resources = [
  { type: 'PDF', title: '分布式容错手册.pdf' }, // 可替换数据
  { type: '视频', title: '架构案例 Demo.mp4' } // 可替换数据
];

export default function CourseDetail() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">课程详情</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">分布式系统高可用设计</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              本课程聚焦于企业级高可用架构实践，配合 AI 助教进行实时疑难解析。 {/* AI 元素 */}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary">继续学习</Button>
            <Button variant="ghost">下载资源包</Button>
          </div>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card title="课程媒体" subtitle="支持视频 / PDF / 音频多模态">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  视频播放器占位 {/* 可替换数据 */}
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                {resources.map((resource) => (
                  <div key={resource.title} className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{resource.title}</p>
                      <p className="text-xs uppercase tracking-widest text-slate-400">{resource.type}</p>
                    </div>
                    <Button variant="ghost">查看</Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card title="章节大纲" subtitle="完成后将自动标记进度">
            <ul className="space-y-3 text-sm text-slate-200">
              {outline.map((item, index) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 text-sm font-semibold text-primary-300">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400">时长 {item.duration}</p>
                    </div>
                  </div>
                  <Button variant="ghost">播放</Button>
                </li>
              ))}
            </ul>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="学习笔记" subtitle="同步企业知识库">
              <div className="space-y-4 text-sm text-slate-200">
                <p>• 设计降级链路时必须标注业务优先级。</p>
                <p>• 配置动态熔断阈值以防止误触发。</p>
                <Button variant="ghost">补充笔记</Button>
              </div>
            </Card>
            <Card title="问答互动" subtitle="AI 助教将优先响应热点问题">
              <div className="space-y-3 text-sm text-slate-200">
                <p>Q: 如何快速评估多地区部署的 RPO？</p>
                <p className="text-xs text-slate-400">A: 建议使用 AI 生成的压测脚本模拟。</p>
                <Button variant="ghost">发起新问题</Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="space-y-6">
          <AICourseMentor />
          <Card title="班级动态" subtitle="实时跟踪同伴学习进度">
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                <span>@Nova 刚刚完成章节测验</span> {/* 可替换数据 */}
                <Button variant="ghost">查看排行</Button>
              </li>
              <li className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                <span>@Iris 留下了新的笔记点评</span> {/* 可替换数据 */}
                <Button variant="ghost">查看</Button>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
