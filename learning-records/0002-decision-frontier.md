# 能够从 design tree 中找出当前 decision frontier

用户已经能在新的多 Worker 调度场景中，根据显式依赖关系正确识别每一轮的完整 decision frontier，并解释为什么依赖尚未解决前置问题的后继 decision 必须后置。这意味着后续可以不再停留在 frontier 定义，而进入 `grilling` 的 facts vs decisions 与 shared understanding。

## Evidence

在 Lesson 0002 的无提示迁移题中，用户正确识别：Round 1 = Q1 + Q3；在 Q1 与 Q3 被解决后，Round 2 = Q2 + Q4，并能说明 Q5 仍需等待 Q4 的答案。用户也能理解直接前置与间接前置的区别。
