import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const anomalies = [
  {
    id: 'role-escalation',
    title: '角色异常晋升',
    detail: '租户A中“培训经理”角色 3 分钟内创建 5 个高权限账号。', // 可替换数据
    recommendation: '建议触发二次审批并回滚新增账号。'
  },
  {
    id: 'policy-drift',
    title: '策略漂移',
    detail: '检测到 PBKDF2 迭代次数被降至 12k，低于合规要求。', // 可替换数据
    recommendation: '立即恢复基线策略并通知安全负责人。'
  },
  {
    id: 'data-export',
    title: '数据导出频繁',
    detail: 'AI 发现连续导出错题本数据 8 次，超过日阈值。', // 可替换数据
    recommendation: '锁定导出接口并生成审计报告。'
  }
];

export default function AISecuritySentinel() {
  const [index, setIndex] = useState(0);
  const current = anomalies[index];

  const next = () => setIndex((prev) => (prev + 1) % anomalies.length);

  return (
    <section className="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 shadow-glow text-rose-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-rose-300">AI 风控哨兵</p>
          <h3 className="mt-1 text-lg font-semibold text-white">实时威胁播报</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={next}>
          下一个风险
        </Button>
      </header>
      <motion.div
        key={current.id}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.3 }}
        className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm"
      >
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-rose-200">
          <span>{current.title}</span>
          <span>告警级别：高</span> {/* 可替换数据 */}
        </div>
        <p className="mt-3 leading-relaxed text-white">{current.detail}</p>
        <p className="mt-3 text-xs text-rose-100/80">{current.recommendation}</p>
      </motion.div>
      <p className="mt-5 text-xs text-rose-100/80">
        基于访问日志、RBAC 图谱与 AI 异常检测模型实时推送缓解指令。 {/* 可替换数据 */}
      </p>
    </section>
  );
}
