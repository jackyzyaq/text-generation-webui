import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AIIntegrationBroker from '../ai/AIIntegrationBroker';

const connectors = [
  { id: 'hr', name: 'HR 系统', protocol: 'GraphQL', status: '运行中', syncTime: '每 30 分钟' }, // 可替换数据
  { id: 'okr', name: 'OKR 平台', protocol: 'REST', status: '排队', syncTime: '每日 07:00' }, // 可替换数据
  { id: 'knowledge', name: '企业知识库', protocol: 'Webhook', status: '异常', syncTime: '即时' }, // 可替换数据
  { id: 'lms', name: '外部 LMS', protocol: 'xAPI', status: '运行中', syncTime: '每 15 分钟' } // 可替换数据
];

const apiMetrics = [
  { label: '成功率', value: '99.4%' },
  { label: '平均延迟', value: '1.8s' },
  { label: '错误率', value: '0.6%' }
];

export default function IntegrationHub() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="系统集成列表"
          subtitle="OAuth2、HR、知识库、OKR 等统一管理"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-700 dark:text-slate-200">
              <thead className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-300">
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-6">系统</th>
                  <th className="py-3 pr-6">协议</th>
                  <th className="py-3 pr-6">同步频率</th>
                  <th className="py-3 pr-6">状态</th>
                  <th className="py-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {connectors.map((connector) => (
                  <tr key={connector.id} className="border-b border-white/5">
                    <td className="py-3 pr-6">{connector.name}</td>
                    <td className="py-3 pr-6">{connector.protocol}</td>
                    <td className="py-3 pr-6">{connector.syncTime}</td>
                    <td className="py-3 pr-6 text-emerald-500">{connector.status}</td>
                    <td className="py-3">
                      <div className="flex flex-wrap gap-2">
                        <Button variant="ghost" className="text-xs uppercase tracking-widest">
                          查看日志
                        </Button>
                        <Button variant="secondary" className="text-xs uppercase tracking-widest">
                          重新认证
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <AIIntegrationBroker />
      </div>
      <Card
        title="接口健康指标"
        subtitle="AI 预测 SLA 与异常趋势"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {apiMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">较前一周期 +0.4%</p> {/* 可替换数据 */}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
