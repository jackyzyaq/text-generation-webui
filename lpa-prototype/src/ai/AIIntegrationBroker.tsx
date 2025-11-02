import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const connectors = [
  {
    id: 'hr',
    name: 'HR 系统同步',
    status: '正在运行',
    latency: '1.3s', // 可替换数据
    recommendation: '新增 2 个字段需要映射，AI 已生成同步脚本草稿。'
  },
  {
    id: 'okr',
    name: 'OKR 平台回写',
    status: '排队中',
    latency: '2.6s', // 可替换数据
    recommendation: '建议在低峰时段调度，AI 可自动调整 cron 表达式。'
  },
  {
    id: 'knowledge',
    name: '企业知识库',
    status: '异常',
    latency: '--',
    recommendation: '检测到 401 未授权，已申请 OAuth2 重新授权。'
  }
];

export default function AIIntegrationBroker() {
  const [selectedId, setSelectedId] = useState('knowledge');
  const selected = connectors.find((item) => item.id === selectedId) ?? connectors[0];

  return (
    <section className="rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-6 shadow-glow text-cyan-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300">AI 集成协调器</p>
          <h3 className="mt-1 text-lg font-semibold text-white">接口健康洞察</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={() => setSelectedId('hr')}>
          查看 HR 镜像
        </Button>
      </header>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {connectors.map((connector) => (
          <motion.button
            key={connector.id}
            onClick={() => setSelectedId(connector.id)}
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
              connector.id === selectedId
                ? 'border-cyan-300 bg-cyan-400/20 text-white'
                : 'border-white/10 bg-white/5 text-cyan-100/80 hover:border-cyan-300/50'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest">
              <span>{connector.name}</span>
              <span>{connector.status}</span>
            </div>
            <p className="mt-2 text-xs text-cyan-100/80">延迟：{connector.latency}</p>
            {connector.id === selectedId && (
              <p className="mt-2 text-sm leading-relaxed">{connector.recommendation}</p>
            )}
          </motion.button>
        ))}
      </div>
      <p className="mt-5 text-xs text-cyan-100/80">
        AI 根据 webhook 回执、错误码与 SLA 预测自动生成修复建议与排程。 {/* 可替换数据 */}
      </p>
    </section>
  );
}
