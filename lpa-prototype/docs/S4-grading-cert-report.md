# S4 · 阅卷、成绩与证书模块交付清单

## 页面与组件
- `GradingCenter`：阅卷工单、仲裁流程 + `AIGradingAssistant` 智能评分矩阵。
- `PerformanceAnalytics`：折线趋势、技能雷达 + `AIScoreCoach` 复盘建议。
- `CertificateStudio`：证书记录表、编号规则 + `AICertificatePlanner` 模板推荐。

## 响应式检查
- 大屏 `md:grid-cols` 提供左右布局，移动端退化为纵向流并保持表格可滚动。
- 卡片半透明层级延续 S1 视觉，确保深浅色模式对比度 > 4.5。

## 状态与动效
- AI 卡片采用光泽发光与 `framer-motion` 切换；
- 折线/雷达/分布模块通过渐变背景模拟数据趋势动效。

## 自检
- 数据字段全部标注 “可替换数据” 注释，编号格式、签章策略保持一致。
- 导航 stage 对应关系：S4 页面为 grading/scores/certificates。
- 无重复组件：Chart 区域使用原子化 div，避免与 S2 表格冲突。
