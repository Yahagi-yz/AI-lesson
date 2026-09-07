# 能够判断 Grilling 的结束条件与 Shared Understanding Gate

用户已经能区分“frontier 清空”与“grilling 真正结束”：frontier 为空只表示当前 design tree 已穷尽、没有已知未决分支或静默假设；AI 仍需总结 shared understanding 并等待用户明确确认。若用户在确认阶段修正约束或决策，应重新打开 design tree、重算 frontier；只有用户确认后，才结束 grilling 并离开该流程。

## Evidence

在 Lesson 0004 的无提示迁移题中，用户正确判断：A 场景中 AI 不能在 frontier 为空后直接行动，而应先进入 shared understanding 确认；B 场景中用户修正 Reviewer 失败后的策略，应重新打开 design tree 并检查对其他分支的影响；C 场景中用户明确确认 shared understanding 后，grilling 结束，不再为当前范围凭空寻找新问题。用户还能解释 frontier 为空仍不足以行动，因为必须先达成并确认共识。
