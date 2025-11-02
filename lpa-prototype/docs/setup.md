# 开发环境指南

## 依赖安装
默认环境通过代理访问外网时可能返回 `npm ERR! code E403`。项目内提供了统一脚本可临时关闭代理并复原 npm 的直连能力：

```bash
cd lpa-prototype
# 1. 关闭代理（覆盖 http_proxy / https_proxy / npm_config_*）
source scripts/disable-proxy.sh
# 2. 执行本地依赖安装
npm install --no-progress
```

若需恢复代理，可重新导出原有环境变量或执行 `source /etc/profile.d/proxy.sh`（若存在），也可重新登录终端以回到默认网络设置。

## 常用脚本
- `npm run dev`：启动 Vite 开发服务器。
- `npm run build`：执行 TypeScript 检查并构建产物。

## 目录速览
- `src/pages`：业务页面（学习/考试/成绩/运维）。
- `src/ai`：AI 交互组件，含“AI 元素”注释与“可替换数据”占位。
- `docs/S*.md`：各阶段交付清单与自检记录。
