import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AISecuritySentinel from '../ai/AISecuritySentinel';

const roleMatrix = [
  { role: '系统管理员', permissions: ['租户管理', '安全策略', '集成配置'] },
  { role: '培训经理', permissions: ['课程配置', '成绩查看', '证书发放'] },
  { role: '监考员', permissions: ['监考中心', '异常处理'] },
  { role: '阅卷专家', permissions: ['阅卷中心', '仲裁确认'] }
];

const auditLogs = [
  {
    id: 'log-01',
    time: '2025-11-02 09:45',
    actor: '李晓',
    action: '更新 RBAC 角色矩阵',
    result: '成功'
  },
  {
    id: 'log-02',
    time: '2025-11-02 10:12',
    actor: 'AI 风控引擎',
    action: '下发 PBKDF2 策略回滚',
    result: '成功'
  }
];

export default function OperationsSecurity() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card
          title="角色与权限矩阵"
          subtitle="支持 RBAC/ABAC 混合配置"
          className="bg-white/85 dark:bg-slate-900/70"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {roleMatrix.map((item) => (
              <div
                key={item.role}
                className="rounded-3xl border border-white/10 bg-white/60 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">{item.role}</p>
                  <Button variant="ghost" className="text-xs uppercase tracking-widest">
                    切换视图
                  </Button>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {item.permissions.map((permission) => (
                    <li key={permission} className="flex items-center justify-between">
                      <span>{permission}</span>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-400">启用</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
        <AISecuritySentinel />
      </div>
      <Card
        title="审计日志"
        subtitle="记录敏感操作与安全策略变更"
        className="bg-white/80 dark:bg-slate-900/60"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700 dark:text-slate-200">
            <thead className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-300">
              <tr className="border-b border-white/10">
                <th className="py-3 pr-6">编号</th>
                <th className="py-3 pr-6">时间</th>
                <th className="py-3 pr-6">操作者</th>
                <th className="py-3 pr-6">操作</th>
                <th className="py-3">结果</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b border-white/5">
                  <td className="py-3 pr-6">{log.id}</td>
                  <td className="py-3 pr-6">{log.time}</td>
                  <td className="py-3 pr-6">{log.actor}</td>
                  <td className="py-3 pr-6">{log.action}</td>
                  <td className="py-3 text-emerald-500">{log.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-300">
          <span>支持导出 CSV / JSON / Syslog</span>
          <Button className="text-xs uppercase tracking-widest">导出日志</Button>
        </div>
      </Card>
    </div>
  );
}
