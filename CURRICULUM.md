# Curriculum

> 目标：从“会调用几个 Skill”进阶到“能识别工程阶段、选择 Flow、监督 AI 工程过程”。

## 学习方式

每个核心主题遵循：

`真实工程问题 → 工程阶段 / Flow → 为什么需要这个 Skill → 核心机制 → 小案例 → 真实项目验收`

核心 Skill 的“掌握”标准：

1. 能识别什么时候该用、什么时候不该用。
2. 能解释核心机制。
3. 能在案例中正确使用。
4. 能发现 AI 用错并纠正。

只有出现真实证据后，才写入 `learning-records/`。

## 课程地图

### Stage 0 — 建立地图

- [x] **Lesson 0001 — Skill 与 Flow：先识别工程阶段**
  - Skill 是针对具体工程问题的独立能力。
  - Flow 是多个 Skills 按工程阶段形成的整体工作路径。
  - 先识别阶段，再选择 Skill。

### Stage 1 — 对齐：在实现之前把问题问对

- [x] `grilling` — **mastered**
  - [x] **Lesson 0002：design tree / decision frontier**
  - [x] **Lesson 0003：facts vs decisions**
  - [x] **Lesson 0004：shared understanding / exit gate**
- [x] `grill-me` — **mastered**
  - [x] **Lesson 0005：user-invoked orchestration**
- [x] `domain-modeling` — **mastered**
  - [x] **Lesson 0006：ubiquitous language — 模糊/重载术语 → concrete scenario → canonical term**
  - [x] **Lesson 0007：CONTEXT.md vs ADR — two artifacts, two bars**
  - glossary / scenario / edge case / ADR discipline
- [x] `grill-with-docs` — **mastered**
  - [x] **Lesson 0008：stateful orchestration — grilling + domain-modeling + paper trail**
  - grilling + domain model + durable docs

**阶段验收**：给出一个真实项目状态，能够判断哪些问题现在能问、哪些必须后置、哪些事实应由 AI 自查，并能在 `grill-me / grill-with-docs` 之间正确路由、监督 domain-modeling 与 durable docs 是否按边界工作。

### Stage 2 — 把对齐结果变成可执行工作

- [ ] `prototype`
  - 什么问题必须“跑起来 / 看见”才能回答
  - throwaway prototype 与 production implementation 的边界
- [ ] `to-spec`
  - 从已达成的 shared understanding 合成 spec
- [ ] `to-tickets`
  - tracer bullet tickets
  - blocking edges
- [ ] `wayfinder`
  - 超出单会话容量的大型工作如何构建决策地图

**阶段验收**：根据任务规模和不确定性，在 `prototype / to-spec / to-tickets / wayfinder` 中做出正确路由。

### Stage 3 — 实现与反馈回路

- [ ] `implement`
- [ ] `tdd`
- [ ] `diagnosing-bugs`
- [ ] `codebase-design`
- [ ] `code-review`

**阶段验收**：能识别“正在实现”“正在诊断”“正在验证设计”“正在审查”之间的边界，防止 AI 用实现代替诊断或用审查代替规格确认。

### Stage 4 — 维护与复杂协作

- [ ] `resolving-merge-conflicts`
- [ ] `triage`
- [ ] `improve-codebase-architecture`
- [ ] `wizard`
- [ ] `research`

### Stage 5 — Productivity Skills

建立完整地图，但按实际价值分层学习：

- [ ] `handoff`
- [ ] `to-questionnaire`
- [ ] `wait-what`
- [ ] `writing-for-agents`
- [ ] 其他仓库中出现的辅助 Skills

### Stage 6 — 综合实战

从一个真实 Codex 项目状态开始，不给出 Skill 名称，由学习者完成：

1. 识别当前阶段。
2. 选择 Flow。
3. 指出当前 decision frontier。
4. 指定 AI 应自查的 facts。
5. 决定需要用户授权的 decisions。
6. 拆出下一步执行路径。
7. 审核 AI 是否跳步或错误调用 Skill。

通过后，视为本阶段 Mission 达成。

## 当前进度

- 当前：**Stage 1 — Alignment**
- 已掌握：**`grilling` primitive**
- 已掌握：**`grill-me` user-invoked orchestration**
- 已掌握：**`domain-modeling`**
- 已掌握：**`grill-with-docs` stateful orchestration**
- 已完成：**Lesson 0002 — Decision Frontier**
- 已完成：**Lesson 0003 — Facts vs Decisions**
- 已完成：**Lesson 0004 — Shared Understanding 与结束条件**
- 已完成：**Lesson 0005 — `grill-me`：user-invoked orchestration**
- 已完成：**Lesson 0006 — `domain-modeling`：ubiquitous language**
- 已完成：**Lesson 0007 — `domain-modeling`：CONTEXT.md vs ADR**
- 已完成：**Lesson 0008 — `grill-with-docs`：stateful orchestration**
- Latest learning record：`learning-records/0008-grill-with-docs-orchestration.md`
- 下一步：**Stage 1 — Alignment 综合验收**
