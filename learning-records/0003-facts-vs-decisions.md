# 能够区分 Facts、Decisions 与 Mixed Questions

用户已经能在新的 Codex 工程场景中，把环境中已有、可通过仓库/Issue/worker 状态/项目文档查出的客观信息识别为 Fact，并把涉及目标、策略、风险或授权的取舍识别为 Decision；同时能够把混合问题拆成“先查 Fact，再问 Decision”的顺序。这意味着后续课程可以进入 `grilling` 的 shared understanding，而不必再停留在“哪些问题该问用户”的基础分类。

## Evidence

在 Lesson 0003 的无提示迁移题中，用户正确分类：Q1=Fact、Q2=Decision、Q3=Fact、Q4=Decision、Q5=Mixed，并将 Q5 拆为“当前 30 分钟巡检是否 paused（Fact，AI 自查）”与“如果 paused，是否改为每 5 分钟巡检（Decision，用户决定）”。
