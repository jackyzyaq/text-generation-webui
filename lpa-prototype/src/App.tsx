import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RootLayout from './layout/RootLayout';
import LearningHomeEmpty from './pages/LearningHomeEmpty';
import CourseDetail from './pages/CourseDetail';
import PracticeCenter from './pages/PracticeCenter';
import ErrorNotebook from './pages/ErrorNotebook';
import PreExamCheck from './pages/PreExamCheck';
import ExamInterface from './pages/ExamInterface';
import ProctorCenter from './pages/ProctorCenter';
import ExceptionDesk from './pages/ExceptionDesk';
import GradingCenter from './pages/GradingCenter';
import PerformanceAnalytics from './pages/PerformanceAnalytics';
import CertificateStudio from './pages/CertificateStudio';
import OperationsSecurity from './pages/OperationsSecurity';
import IntegrationHub from './pages/IntegrationHub';
import Toast from './components/ui/Toast';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [toastOpen, setToastOpen] = useState(false);
  type NavKey =
    | 'learning'
    | 'course'
    | 'practice'
    | 'errors'
    | 'precheck'
    | 'exam'
    | 'proctor'
    | 'exceptions'
    | 'grading'
    | 'scores'
    | 'certificates'
    | 'operations'
    | 'integration';
  const [activeNav, setActiveNav] = useState<NavKey>('learning');

  const navItems: { key: NavKey; label: string; description: string; stage: string }[] = [
    { key: 'learning', label: '学习首页', description: '课程概览与推荐', stage: 'S2 学习' },
    { key: 'course', label: '课程详情', description: '章节大纲与资源', stage: 'S2 学习' },
    { key: 'practice', label: '练习中心', description: '每日练与自选练', stage: 'S2 学习' },
    { key: 'errors', label: '错题本', description: '复盘与纠错策略', stage: 'S2 学习' },
    { key: 'precheck', label: '考前检查', description: '设备检测与规则确认', stage: 'S3 考试' },
    { key: 'exam', label: '考试作答', description: '实时保存与策略助手', stage: 'S3 考试' },
    { key: 'proctor', label: '监考中心', description: '摄像头与告警管理', stage: 'S3 考试' },
    { key: 'exceptions', label: '异常处理', description: '断线重连与申诉', stage: 'S3 考试' },
    { key: 'grading', label: '阅卷中心', description: 'AI 初评与仲裁流', stage: 'S4 成绩' },
    { key: 'scores', label: '成绩分析', description: '趋势图与复盘', stage: 'S4 成绩' },
    { key: 'certificates', label: '证书工坊', description: '模板配置与签章', stage: 'S4 成绩' },
    { key: 'operations', label: '运维安全', description: '权限矩阵与审计', stage: 'S5 运维' },
    { key: 'integration', label: '系统集成', description: '外部接口与连接', stage: 'S5 运维' }
  ];

  const pageMap: Record<NavKey, JSX.Element> = {
    learning: <LearningHomeEmpty />,
    course: <CourseDetail />,
    practice: <PracticeCenter />,
    errors: <ErrorNotebook />,
    precheck: <PreExamCheck />,
    exam: <ExamInterface />,
    proctor: <ProctorCenter />,
    exceptions: <ExceptionDesk />,
    grading: <GradingCenter />,
    scores: <PerformanceAnalytics />,
    certificates: <CertificateStudio />,
    operations: <OperationsSecurity />,
    integration: <IntegrationHub />
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <RootLayout
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onShowToast={() => setToastOpen(true)}
        onNavigate={(key) => setActiveNav(key as typeof activeNav)}
        activeNav={activeNav}
        navItems={navItems}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNav}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {pageMap[activeNav]}
          </motion.div>
        </AnimatePresence>
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
