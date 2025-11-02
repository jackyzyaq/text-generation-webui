# S5 · 运维、安全与集成模块交付清单

## 页面与组件
- `OperationsSecurity`：RBAC/ABAC 权限矩阵、审计日志 + `AISecuritySentinel` 风控哨兵。
- `IntegrationHub`：OAuth2/HR/OKR 等集成列表 + `AIIntegrationBroker` 接口协调器。

## 响应式检查
- 桌面端双列展示矩阵 + AI 哨兵，移动端改为单列并保持表格横向滚动。
- 底部导航滚动区宽度自适应，保证所有 stage 可访问。

## 状态与动效
- AI 组件应用 `framer-motion` 切换（风险轮播、接口建议），保持 0.3s 动效时长。
- 权限矩阵按钮共享 Button 组件交互动效，表格使用半透明层强化层次。

## 自检
- 安全策略字段标注 PBKDF2、OAuth2 等关键字，符合任务说明。
- 导航键 operations / integration 与 stage “S5 运维” 对齐。
- 无新增依赖，沿用 S1 Tailwind token，命名统一。
