# Notes

- 用户希望严格执行 `teach`，而不是只借鉴教学理念。
- 教学目标：在 Codex / AI 软件工程中识别阶段、选择与组合 Skills / Flows、监督并纠正 AI 的工程过程。
- 课程按真实工程 Flow 组织，不按 Skill 名称机械顺序教学。
- 整个 `mattpocock/skills` 建立完整地图：核心 Skills 深学，次要 Skills 识别与调用即可。
- 概念使用小案例，阶段性验收优先使用真实 Codex / 软件工程任务。
- 核心 Skill 只有在用户证明“识别边界 + 解释机制 + 正确应用 + 能纠错”后，才视为 mastered。
- GitHub Issue 用于保存每课重要讨论；`learning-records/` 只记录已证明的学习成果，不作为会话日志。
- 常规教学状态直接更新 `main`；重大 Mission / Curriculum 重构再考虑 PR。
- Lesson 0001 的原教学执行不完整，但用户已证明理解 Skill 与 Flow，因此保留学习成果并规范化落盘。
- **每一节正式 Lesson 都必须包含交互式练习与即时反馈。** 除仓库中的 canonical `lessons/*.html` 外，在当前 ChatGPT 会话中应额外生成一个可直接打开的**单文件 HTML 交互预览**（通常放在临时目录 `/mnt/data/`），并把可点击链接发给用户；不能因为换新窗口而省略这一步。
- 当前会话预览只是便于立即学习，仓库中的模块化 Lesson（复用 `assets/`）仍然是 source of truth。
- 每节课结束前应保留一个**无提示迁移题**在对话中验收；网页练习做完不等于 mastered，只有用户在新场景中证明会用后才写 learning record。
- **交互形式与视觉也必须延续现有课程体系，不能仅满足“有一个交互网页”。** 新 Lesson 开始前先读取 `assets/` 和最近 2–3 节 Lesson，优先复用现有组件和页面结构。
- 课程默认视觉基线：`assets/course.css`。保持现有简洁、纸张式/Tufte 风格、卡片 + flow/code block + 少量交互，不要无理由切换成 dashboard、游戏化、聊天模拟器、花哨动画或完全不同的 UI 框架。
- 单选/判断/分类等即时反馈练习优先复用 `assets/quiz.js`；需要“选择完整 frontier/多项集合”时优先复用 `assets/frontier-quiz.css` + `assets/frontier-quiz.js`。现有 `assets/` 当前包括 `course.css`、`quiz.js`、`frontier-quiz.css`、`frontier-quiz.js`。
- 交互题型应服务于本课单一能力：能用已有组件表达就不要新建组件；确实需要新交互时，先新增**可复用组件**到 `assets/`，并让 canonical Lesson 与当前会话单文件预览保持同样的交互逻辑和视觉语言。
- 交互参考样例：`lessons/0002-decision-frontier.html`（多选 frontier 练习）、`lessons/0003-facts-vs-decisions.html`（Fact/Decision 即时分类）、`lessons/0004-shared-understanding.html`（状态/退出门槛判断）。后续课程应把这些作为交互形式参考，而不是每次重新设计一套。
- Lesson 0006 已证明：用户能通过 concrete scenario 将重载术语拆成 canonical concepts，并能区分 domain model 中的概念/关系与 implementation detail；但 `domain-modeling` 整体尚未 mastered，下一步继续学习 CONTEXT.md 与 ADR 的不同写入门槛。
