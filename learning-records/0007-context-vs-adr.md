# 能够区分 CONTEXT.md、ADR 与不应持久化的普通决策

用户已经能把领域概念/关系路由到 `CONTEXT.md`，把普通实现策略排除在 glossary 与 ADR 之外，并能对真正的重要架构决策逐项应用 ADR 的三个 gate：hard to reverse、surprising without context、real trade-off。对 Worker 进程模型场景，用户正确识别 `Worker` 定义应进入 `CONTEXT.md`、独立进程选择应进入 ADR、30 秒重试策略属于 Neither；并能解释进程模型因大量调度/日志/恢复逻辑依赖而难逆转、因第三方工具崩溃与故障隔离背景不明显而具有 context-surprise、且 thread/subprocess 是经过真实比较的替代方案。这意味着 `domain-modeling` 的语言收敛与持久化纪律都已具备可迁移的使用能力。

## Evidence

Lesson 0006 已证明用户会用 concrete scenario 拆解重载术语，并区分领域关系与实现细节；Lesson 0007 的无提示迁移进一步证明用户能正确执行 `CONTEXT.md / ADR / Neither` 三路路由，并发现 Codex 把所有 decision 同时写进 glossary 和 ADR 的错误。