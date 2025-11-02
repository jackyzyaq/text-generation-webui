import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Button from '../components/ui/Button';
import GlowBackground from '../ai/GlowBackground';

interface NavItem {
  key: string;
  label: string;
  description?: string;
  stage?: string;
}

interface RootLayoutProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onShowToast: () => void;
  onNavigate: (key: string) => void;
  activeNav: string;
  navItems: NavItem[];
  children: ReactNode;
}

export default function RootLayout({
  theme,
  onToggleTheme,
  onShowToast,
  onNavigate,
  activeNav,
  navItems,
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
          <nav className="hidden max-w-4xl flex-wrap items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={clsx(
                  'rounded-full px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-accent/60',
                  item.key === activeNav
                    ? 'bg-primary-500/30 text-white shadow-glow'
                    : 'text-slate-300 hover:bg-white/10'
                )}
              >
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
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
          <div className="space-y-4 px-6 pb-4">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  variant={item.key === activeNav ? 'primary' : 'ghost'}
                  className="w-full justify-center"
                  onClick={() => {
                    onNavigate(item.key);
                    setNavOpen(false);
                  }}
                >
                  <div className="flex w-full flex-col items-center">
                    <span className="font-semibold">{item.label}</span>
                    {item.stage && <span className="text-[10px] text-white/70">{item.stage}</span>}
                  </div>
                </Button>
              ))}
            </div>
            <Button variant="ghost" className="w-full justify-center" onClick={onShowToast}>
              原型提示
            </Button>
            <Button variant="secondary" className="w-full justify-center" onClick={onToggleTheme}>
              {theme === 'dark' ? '切换浅色' : '切换深色'}
            </Button>
          </div>
        </motion.nav>
      </header>
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-28 pt-10 md:grid-cols-[280px_1fr] md:px-6 lg:grid-cols-[320px_1fr]">
        <aside className="hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur md:block">
          <p className="text-xs uppercase tracking-widest text-accent">学习路径</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  className={clsx(
                    'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition',
                    item.key === activeNav
                      ? 'bg-primary-500/30 text-white shadow-glow'
                      : 'text-slate-300 hover:bg-white/10'
                  )}
                >
                  <span className="font-medium">{item.label}</span>
                  <span
                    className={clsx(
                      'h-2 w-2 rounded-full',
                      item.key === activeNav ? 'bg-accent' : 'bg-white/30'
                    )}
                  />
                </button>
                <div className="mt-1 space-y-1 px-4 text-xs text-slate-400">
                  {item.stage && <p className="uppercase tracking-widest text-accent/80">{item.stage}</p>}
                  {item.description && <p>{item.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <section className="min-h-[60vh] space-y-6">{children}</section>
      </main>
      <nav className="fixed bottom-5 left-0 right-0 z-20 px-4 md:hidden">
        <div className="mx-auto max-w-lg overflow-x-auto rounded-full border border-white/10 bg-slate-950/70 px-2 py-2 backdrop-blur">
          <div className="flex min-w-max items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={clsx(
                  'flex min-w-[120px] flex-col items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-accent/60',
                  item.key === activeNav
                    ? 'bg-primary-500/30 text-white shadow-glow'
                    : 'text-slate-300 hover:bg-white/10'
                )}
              >
                <span>{item.label}</span>
                {item.stage && <span className="text-[9px] text-white/70">{item.stage}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        © 2025 LPA Intelligent Learning Platform · Powered by 智能教研引擎
      </footer>
    </div>
  );
}
