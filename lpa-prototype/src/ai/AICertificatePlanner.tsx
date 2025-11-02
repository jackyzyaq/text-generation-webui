import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const templates = [
  {
    id: 'aurora',
    name: '极光科技风',
    highlight: '适合技术认证，含动态光纹边框',
    serial: 'LPA-2025-A001', // 可替换数据
    accent: 'from-cyan-500/30 via-blue-500/20 to-purple-500/30'
  },
  {
    id: 'heritage',
    name: '学术典藏版',
    highlight: '保守稳重，可搭配金色印章',
    serial: 'LPA-2025-H018', // 可替换数据
    accent: 'from-amber-500/20 via-orange-400/10 to-red-400/20'
  },
  {
    id: 'minimal',
    name: '极简未来版',
    highlight: '线性渐变+数字签章，适配移动端展示',
    serial: 'LPA-2025-M045', // 可替换数据
    accent: 'from-slate-500/20 via-slate-400/10 to-slate-300/20'
  }
];

export default function AICertificatePlanner() {
  const [templateId, setTemplateId] = useState(templates[0].id);
  const template = templates.find((item) => item.id === templateId) ?? templates[0];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glow text-slate-100">{/* AI 元素 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">AI 证书建议</p>
          <h3 className="mt-1 text-lg font-semibold text-white">模板动态匹配</h3>
        </div>
        <Button variant="ghost" className="text-xs" onClick={() => setTemplateId('heritage')}>
          推荐官方版
        </Button>
      </header>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[220px_1fr]">
        <div className="space-y-3">
          {templates.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setTemplateId(item.id)}
              whileHover={{ scale: 1.02 }}
              className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                item.id === templateId
                  ? 'border-accent/60 bg-accent/20 text-white'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:border-accent/40'
              }`}
            >
              <p className="font-semibold">{item.name}</p>
              <p className="mt-1 text-xs text-slate-300/80">{item.highlight}</p>
            </motion.button>
          ))}
        </div>
        <motion.div
          key={template.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${template.accent} p-6 text-sm`}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
            <span>Learn · Practice · Assess</span>
            <span>编号 {template.serial}</span>
          </div>
          <div className="mt-8 space-y-3 text-white">
            <h4 className="text-2xl font-semibold">智能培训结业证书</h4>
            <p className="text-sm text-white/80">
              授予在 LPA 平台完成规定课程、实践与评估的学员，认可其在 AI 驱动的学习旅程中的卓越表现。
              {/* 可替换数据 */}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-white/70">
              <span>AI 签章：合规引擎</span>
              <span>人工复核：陈思远</span> {/* 可替换数据 */}
            </div>
          </div>
          <Button className="mt-6 w-full justify-center text-xs uppercase tracking-widest">导出模板</Button>
        </motion.div>
      </div>
    </section>
  );
}
