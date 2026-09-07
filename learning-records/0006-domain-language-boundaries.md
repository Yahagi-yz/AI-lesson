# 能够用场景收敛领域术语，并区分领域模型与实现细节

用户已经能在领域词语含义重载或不清晰时识别出不能由 AI 暗自选择含义，而应通过具体场景把概念边界拆开并形成 canonical terms；同时能够区分领域模型中的概念/关系与实现细节，理解 `CONTEXT.md` 应记录“概念是什么、概念之间如何关联”，而不是数据库表、函数或具体重试策略。这意味着后续可以把术语澄清、scenario/edge-case 检验和 glossary 边界视为已掌握前提，继续学习 `domain-modeling` 中 ADR 的写入门槛与更完整的持久化纪律。

## Evidence

在 Lesson 0006 迁移中，用户指出 Codex 面对重载的 `task` 时不应在未澄清含义的情况下擅自把它解释为某个特定概念；随后用“输出 hello world 的 Task 与一次具体执行”区分抽象工作单元和执行实例，并最终正确判断：“一个 Task 可以有多个 Runs”属于 domain model / `CONTEXT.md`，而“Run 存储在 `task_runs` 表”属于 implementation detail。