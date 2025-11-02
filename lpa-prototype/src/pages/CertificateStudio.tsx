import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AICertificatePlanner from '../ai/AICertificatePlanner';

const issuanceRecords = [
  { id: 'cert-2025-001', owner: '王晴', template: '极光科技风', status: '已签章' }, // 可替换数据
  { id: 'cert-2025-002', owner: '陈博', template: '学术典藏版', status: '待复核' }, // 可替换数据
  { id: 'cert-2025-003', owner: '赵悦', template: '极简未来版', status: '已发送' } // 可替换数据
];

const numberingRules = [
  {
    id: 'rule-1',
    label: '编号格式',
    description: 'LPA-<年份>-<序号>，支持租户前缀。' // 可替换数据
  },
  {
    id: 'rule-2',
    label: '签章策略',
    description: 'AI 检查签章有效期，超过 180 天自动提醒更新。' // 可替换数据
  },
  {
    id: 'rule-3',
    label: '导出规格',
    description: '支持 PNG、PDF、数字证书 JSON 三种格式。' // 可替换数据
  }
];

export default function CertificateStudio() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="证书发放记录"
          subtitle="统一管理模板、编号与签章状态"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-700 dark:text-slate-200">
              <thead className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-300">
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-6">证书编号</th>
                  <th className="py-3 pr-6">学员</th>
                  <th className="py-3 pr-6">使用模板</th>
                  <th className="py-3 pr-6">状态</th>
                  <th className="py-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {issuanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-white/5">
                    <td className="py-3 pr-6">{record.id}</td>
                    <td className="py-3 pr-6">{record.owner}</td>
                    <td className="py-3 pr-6">{record.template}</td>
                    <td className="py-3 pr-6 text-emerald-500">{record.status}</td>
                    <td className="py-3">
                      <Button variant="ghost" className="text-xs uppercase tracking-widest">
                        重新发送
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-300">
            <span>最新批次更新时间：2025-11-02</span> {/* 可替换数据 */}
            <Button className="text-xs uppercase tracking-widest">批量导出 ZIP</Button>
          </div>
        </Card>
        <AICertificatePlanner />
      </div>
      <Card
        title="编号与签章规则"
        subtitle="AI 智能校验 + 手动覆盖"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {numberingRules.map((rule) => (
            <div
              key={rule.id}
              className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
            >
              <p className="text-xs uppercase tracking-widest text-primary-500">{rule.label}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-200/90">{rule.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
