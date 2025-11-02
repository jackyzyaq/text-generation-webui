import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Table from '../components/ui/Table';
import AIErrorInsight from '../ai/AIErrorInsight';

const errorStats = [
  { date: '03-14', topic: '一致性协议', result: '待复盘' }, // 可替换数据
  { date: '03-16', topic: '服务熔断', result: '已复盘' }, // 可替换数据
  { date: '03-17', topic: '可观测性告警', result: '待复盘' } // 可替换数据
];

export default function ErrorNotebook() {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-rose-400/40 bg-rose-500/10 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-rose-200">错题本</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">聚焦高频错题与补救策略</h2>
            <p className="mt-2 text-sm text-rose-100">
              AI 洞察将基于你的练习表现给出纠错优先级，并同步企业知识库反馈。 {/* AI 元素 */}
            </p>
          </div>
          <Button variant="ghost" className="text-rose-100 hover:text-white hover:bg-rose-400/20">
            导出错题报告
          </Button>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] xl:grid-cols-[2fr_1fr]">
        <Card title="错题清单" subtitle="支持按照知识点、题型、难度筛选">
          <Table
            columns={[
              { key: 'date', header: '日期' },
              { key: 'topic', header: '知识点' },
              {
                key: 'result',
                header: '状态',
                render: (value) => (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{value as string}</span>
                )
              }
            ]}
            data={errorStats}
          />
        </Card>
        <div className="space-y-6">
          <AIErrorInsight />
          <Card title="复盘记录" subtitle="与导师协同的反馈摘要">
            <div className="space-y-3 text-sm text-rose-50">
              <p>• 需补充一致性协议相关的案例拆解。</p>
              <p>• 关注监控指标阈值设置的合理性。</p>
              <Button className="bg-rose-500 hover:bg-rose-400">继续复盘</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
