# S3 · 考试与风控模块交付清单

## 页面与组件
- `PreExamCheck`：考前流程卡片 + `AIDeviceScanner` AI 环境体检。
- `ExamInterface`：客观/主观题混合答题区 + `AIExamCoach` 实时策略助手。
- `ProctorCenter`：多源监控墙、告警工单 + `AIInvigilatorPanel` 监考统筹。
- `ExceptionDesk`：异常复盘工单 + `AIAnomalyInsights` 风险指纹面板。

## 响应式检查
- PC：`lg:grid-cols-[2fr_1fr]` 布局串联，侧栏信息随内容固定。
- Mobile：全部模块栅格降级为单列，底部导航支持横向滚动选择阶段。

## 状态与动效
- `framer-motion` 驱动告警、AI 建议的淡入/切换动画；
- Toast、按钮保持 S1/S2 风格，监考数据条使用光波渐变。

## 自检
- 导航键值统一（learning→integration），配套 stage 标签。
- 所有 AI 组件均标注 “AI 元素” 注释，并包含 “可替换数据”。
- 断线流程、补考、申诉路径完整呈现，无重复组件实例。
