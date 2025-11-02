import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import GlowBackground from '../ai/GlowBackground';

interface RootLayoutProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onShowToast: () => void;
  children: ReactNode;
}

export default function RootLayout({
  theme,
  onToggleTheme,
  onShowToast,
  children
}: RootLayoutProps) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ai-gradient pb-16 text-slate-100">
      <GlowBackground />
      <header className="relative z-10 border-b border-white/10 bg-slate-950/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <motion.span
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/30 text-xl font-bold text-accent shadow-glow"
              animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 6 }}
            >
              LPA
            </motion.span>
            <div>
              <p className="text-sm uppercase tracking-widest text-accent">AI 培训引擎</p>
              <h1 className="text-lg font-semibold">Learn · Practice · Assess</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-sm" onClick={onShowToast}>
              原型提示
            </Button>
            <Button variant="secondary" className="text-sm" onClick={onToggleTheme}>
              {theme === 'dark' ? '切换浅色' : '切换深色'}
            </Button>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setNavOpen((open) => !open)}
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
          >
            菜单
          </Button>
        </div>
        <motion.nav
          id="mobile-nav"
          initial={false}
          animate={{ height: navOpen ? 'auto' : 0 }}
          className="overflow-hidden md:hidden"
        >
          <div className="space-y-3 px-6 pb-4">
            <Button variant="ghost" className="w-full justify-center" onClick={onShowToast}>
              原型提示
            </Button>
            <Button variant="secondary" className="w-full justify-center" onClick={onToggleTheme}>
              {theme === 'dark' ? '切换浅色' : '切换深色'}
            </Button>
          </div>
        </motion.nav>
      </header>
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-[280px_1fr] md:px-6 lg:grid-cols-[320px_1fr]">
        <aside className="hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur md:block">
          <p className="text-xs uppercase tracking-widest text-accent">学习路径</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between">
              <span>学习首页</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            </li>
            <li className="flex items-center justify-between text-slate-500">
              <span>课程详情</span>
              <span>即将推出</span> {/* 可替换数据 */}
            </li>
            <li className="flex items-center justify-between text-slate-500">
              <span>练习中心</span>
              <span>设计中</span> {/* 可替换数据 */}
            </li>
          </ul>
        </aside>
        <section className="min-h-[60vh] space-y-6">{children}</section>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        © 2025 LPA Intelligent Learning Platform · Powered by 智能教研引擎
      </footer>
    </div>
  );
}
