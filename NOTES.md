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
