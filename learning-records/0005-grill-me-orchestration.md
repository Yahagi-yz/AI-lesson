# 能够正确识别并调用 `grill-me` 的 user-invoked orchestration

用户已经能判断：当一个值得推进的想法仍然模糊、需要通过持续追问澄清，但不需要读取或持久化仓库状态时，应由用户主动调用 `grill-me`；`grill-me` 本身只是 user-invoked、stateless 的入口，真正执行 design tree、decision frontier 等机制的是底层 `grilling` primitive。这意味着后续可以把 `grilling` 与 `grill-me` 视为已掌握前提，进入更复杂的 stateful alignment 路由。

## Evidence

在 Lesson 0005 的无提示迁移中，用户正确指出：场景适合 `grill-me`，因为当前设计逻辑尚未澄清；Codex 不能自行启动 `grill-me`，且 `grill-me` 不负责写文件；在最终迁移题中又能独立回答“无仓库、希望彻底问清想法、不创建文件”应调用 `grill-me`，而 design tree / frontier 由 `grilling` 执行。
