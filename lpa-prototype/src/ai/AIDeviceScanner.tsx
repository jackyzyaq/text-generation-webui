import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const diagnostics = [
  { id: 'camera', label: '摄像头状态', status: 'ready', note: '分辨率 1080p / 帧率 60fps' }, // 可替换数据
  { id: 'microphone', label: '麦克风采集', status: 'ready', note: '噪声抑制正常' }, // 可替换数据
  { id: 'network', label: '网络稳定性', status: 'warning', note: '丢包率 1.2%，建议切换 5G 网络' } // 可替换数据
];

export default function AIDeviceScanner() {
  const [activeId, setActiveId] = useState('network');

  return (
    <section className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-sm text-emerald-100 shadow-glow">{/* AI 元素 */}
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-300">AI 考前诊断</p>
          <h3 className="mt-1 text-lg font-semibold text-white">环境健康度 92%</h3> {/* 可替换数据 */}
        </div>
        <Button variant="ghost" className="text-xs" onClick={() => setActiveId('camera')}>
          重新扫描
        </Button>
      </header>
      <div className="mt-6 space-y-3">
        {diagnostics.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            whileHover={{ scale: 1.02 }}
            className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
              activeId === item.id
                ? 'border-emerald-400 bg-emerald-400/20'
                : 'border-white/10 bg-white/5 hover:border-emerald-400/60'
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest">
              <span className="text-emerald-200">{item.label}</span>
              <span className={item.status === 'warning' ? 'text-amber-300' : 'text-emerald-300'}>
                {item.status === 'warning' ? '需关注' : '已通过'}
              </span>
            </div>
            {activeId === item.id && <p className="mt-2 text-emerald-100/90">{item.note}</p>}
          </motion.button>
        ))}
      </div>
      <footer className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-emerald-200">
        AI 建议：保持光线均匀，避免逆光；检测到轻微网络波动，建议开启备份热点。 {/* 可替换数据 */}
      </footer>
    </section>
  );
}
