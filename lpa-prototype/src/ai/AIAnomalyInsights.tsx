import { useMemo } from 'react';
import { motion } from 'framer-motion';

const anomalyEvents = [
  { id: 'focus-loss', label: '窗口切出', count: 1, severity: '中', remedy: '已发送二次确认提示' }, // 可替换数据
  { id: 'network', label: '网络抖动', count: 3, severity: '中', remedy: '自动启用离线缓存' }, // 可替换数据
  { id: 'camera', label: '摄像遮挡', count: 0, severity: '低', remedy: '无需处理' } // 可替换数据
];

export default function AIAnomalyInsights() {
  const riskScore = useMemo(() => 78, []); // 可替换数据

  return (
    <section className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-6 shadow-glow text-amber-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-amber-300">AI 异常洞察</p>
          <h3 className="mt-1 text-lg font-semibold text-white">当前风险指数 {riskScore}</h3>
        </div>
        <span className="rounded-full border border-amber-300/40 bg-amber-400/20 px-3 py-1 text-xs text-amber-200">
          自动更新
        </span>
      </header>
      <div className="mt-6 space-y-3">
        {anomalyEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-amber-200">
              <span>{event.label}</span>
              <span>发生 {event.count} 次</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span>严重度：{event.severity}</span>
              <span className="text-amber-100/80">处理：{event.remedy}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 text-xs text-amber-100/80">
        风险模型结合行为生物识别、键鼠轨迹与网络包延迟计算得出综合指数。 {/* 可替换数据 */}
      </p>
    </section>
  );
}
