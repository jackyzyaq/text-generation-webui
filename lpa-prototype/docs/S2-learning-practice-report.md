# S2 · 学习与练习模块交付清单

## 📁 更新文件树
```
src/
├─ ai/
│  ├─ AIAdaptivePractice.tsx
│  ├─ AICourseMentor.tsx
│  ├─ AIErrorInsight.tsx
│  └─ AIRecommendationPanel.tsx
├─ layout/
│  └─ RootLayout.tsx
├─ pages/
│  ├─ CourseDetail.tsx
│  ├─ ErrorNotebook.tsx
│  ├─ LearningHomeEmpty.tsx
│  └─ PracticeCenter.tsx
└─ App.tsx
```

## 💡 页面原型代码索引
- `LearningHomeEmpty.tsx`：学习首页（AI 推荐、课程进度、待办）。
- `CourseDetail.tsx`：课程详情（章节大纲、媒体资源、AI 助教）。
- `PracticeCenter.tsx`：练习中心（每日练、自选练、AI 自适应）。
- `ErrorNotebook.tsx`：错题本（错题清单、AI 纠错洞察）。

## 🌳 页面组件树概览
```
RootLayout (PC Sidebar + Mobile 底部导航)
└─ AnimatedPageWrapper (Framer Motion)
   ├─ LearningHomeEmpty
   │  ├─ Card[学习轨道]
   │  ├─ Card[学习亮点]
   │  └─ Card[待办/社区]
   ├─ CourseDetail
   │  ├─ Card[课程媒体]
   │  ├─ Card[章节大纲]
   │  └─ AICourseMentor
   ├─ PracticeCenter
   │  ├─ Card[今日练习]
   │  ├─ Card[自选练习]
   │  └─ AIAdaptivePractice
   └─ ErrorNotebook
      ├─ Table[错题清单]
      └─ AIErrorInsight
```

## 🎨 样式与动效
- 保持 Tailwind 栅格体系（≥1440/1280/1024/768/375）与玻璃拟态背景。
- 新增移动端底部导航条，配合 PC 侧边导航保持视觉一致。
- 页面切换使用 `AnimatePresence` + `motion.div` 做淡入淡出/位移过渡。
- AI 面板采用脉冲发光与悬浮反馈，沿用统一光波风格。

## ⚡ 交互逻辑
- `RootLayout` 接受导航数据，驱动 PC 侧栏、头部及移动端底栏联动。
- 各 AI 组件提供切换按钮/选项，实时更新推荐状态（含 `// AI 元素` 注释）。
- `PracticeCenter` 与 `ErrorNotebook` 通过 `Table` 组件输出响应式卡片列表。

## 🧠 自检报告
- [x] 命名规范统一（NavKey、AI 组件前缀）。
- [x] 响应式布局（PC 栅格 + Mobile 底栏 + 表格卡片视图）。
- [x] 所有 AI 交互组件已标注 “AI 元素” 注释。
- [x] 动效与 S1 组件库一致（Framer Motion 统一过渡参数）。
- [x] 未引入重复组件，复用了基础 Card/Button/Table。
