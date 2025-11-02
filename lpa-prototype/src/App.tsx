import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RootLayout from './layout/RootLayout';
import LearningHomeEmpty from './pages/LearningHomeEmpty';
import Toast from './components/ui/Toast';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <RootLayout
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onShowToast={() => setToastOpen(true)}
      >
        <LearningHomeEmpty />
      </RootLayout>
      <AnimatePresence>
        {toastOpen && (
          <Toast
            tone="info"
            title="Prototype Loaded"
            description="欢迎体验 LPA 学·练·考一体化平台原型。" // 可替换数据
            onClose={() => setToastOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
