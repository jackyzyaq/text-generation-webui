# S1 组件属性表与动效清单

| 组件 | 关键属性 | 默认动效 | 说明 |
| --- | --- | --- | --- |
| `Button` | `variant` (`primary`\|`secondary`\|`ghost`), `icon`, `loading` | `whileHover`, `whileTap` 缩放轻微弹性 | 圆角胶囊按钮，支持 AI 状态提示 |
| `Card` | `title`, `subtitle`, `footer` | 渐入 (`y` 方向) | 玻璃拟态卡片容器 |
| `Table` | `columns`, `data`, `emptyState` | 行 hover 渐变 | 响应式表格，空态使用 dashed 边框 |
| `FormField` | `label`, `hint`, `required`, `input`, `error`, `inline` | 输入态聚焦阴影 | 可嵌入 AI 辅助提示 |
| `Modal` | `open`, `title`, `description`, `children`, `footer` | 遮罩淡入、内容弹簧缩放 | 适配 AI 助手会话 |
| `Toast` | `tone`, `title`, `description`, `action` | 底部浮现 | 弹层提示 AI 洞察 |
| `Skeleton` | `width`, `height`, `rounded` | `animate-pulse` + 渐变 | 骨架屏占位 |
| `GlowBackground` | — | 渐隐脉冲 | AI 视觉背景动效 |

## 响应式断点
- XL: ≥1440px
- LG: ≥1280px
- MD: ≥1024px
- SM: ≥768px
- XS: ≥375px

## 自检
- 命名遵循统一前缀与语义化 Tailwind 颜色
- 深色与浅色主题切换通过 `dark` class 控制
- 所有可替换数据均以注释标明
- 动效均基于 Framer Motion 或 Tailwind 动画，确保 >60fps
