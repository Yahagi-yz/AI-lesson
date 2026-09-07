# 能够监督 `grill-with-docs` 的 stateful orchestration

用户已经能把 `grill-with-docs` 识别为适用于“有 repo、change 仍模糊、且单会话可以澄清”的 user-invoked stateful orchestration，并理解它必须同时加载 `grilling` 与 `domain-modeling`：前者负责 design tree / frontier / shared understanding，后者负责领域语言与 durable paper trail。用户还能根据“frontier/round 正常但 `CONTEXT.md` 未随已解决术语更新”的现象识别 `domain-modeling` partial-loading failure，并知道普通 decisions 不会因为 stateful 就自动进入 `CONTEXT.md` 或 ADR。

## Evidence

在 Lesson 0008 的无提示迁移中，用户正确判断该真实仓库内、范围可由单会话澄清的变更适合 `grill-with-docs`；发现 `Task` / `Run` 已明确而 `CONTEXT.md` 完全无变化时，指出最可能漏加载 `domain-modeling`；拒绝为“失败后重试 3 次”创建 ADR，因为它只是普通、易逆转的 decision，不满足 hard-to-reverse / surprising-without-context / real-trade-off 三项门槛；并指出完成 shared understanding 后不应清空上下文重开，而应在同一 conversation 中继续交给 `to-spec`，以保留未写入 durable docs 的普通 decisions。