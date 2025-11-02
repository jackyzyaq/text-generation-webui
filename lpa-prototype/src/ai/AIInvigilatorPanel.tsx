import { useState } from 'react';
import { motion } from 'framer-motion';

const feeds = [
  {
    id: 'main',
    name: '主摄像头',
    status: '正常',
    confidence: '99.2%',
    alert: '专注度稳定，姿态正常' // 可替换数据
  },
  {
    id: 'side',
    name: '侧摄像头',
    status: '轻微遮挡',
    confidence: '91.5%',
    alert: '检测到考生侧头 2 次，建议提醒' // 可替换数据
  },
  {
    id: 'screen',
    name: '屏幕录制',
    status: '正常',
    confidence: '100%',
    alert: '窗口活动无异常切换' // 可替换数据
  }
];

export default function AIInvigilatorPanel() {
  const [activeFeed, setActiveFeed] = useState(feeds[0]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-glow text-slate-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">AI 监考总览</p>
          <h3 className="mt-1 text-lg font-semibold text-white">多源摄像侦测</h3>
        </div>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
          实时更新
        </span>
      </header>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {feeds.map((feed) => (
          <motion.button
            key={feed.id}
            onClick={() => setActiveFeed(feed)}
            whileHover={{ scale: 1.01 }}
            className={`flex flex-col rounded-2xl border px-4 py-3 text-left transition ${
              feed.id === activeFeed.id
                ? 'border-accent/60 bg-accent/20'
                : 'border-white/10 bg-white/5 hover:border-accent/40'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-300">
              <span>{feed.name}</span>
              <span className="font-semibold text-accent">可信度 {feed.confidence}</span>
            </div>
            <p className="mt-2 text-sm text-white">状态：{feed.status}</p>
            {feed.id === activeFeed.id && (
              <p className="mt-2 text-xs text-slate-200/90">{feed.alert}</p>
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
