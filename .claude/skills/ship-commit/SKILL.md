---
name: ship-commit
description: Commit the staged changes on the current branch. No new branch, no push, no PR. Use when the user says /ship-commit or asks to just commit the staged work.
disable-model-invocation: true
---

# /ship-commit

Commit the **staged** changes on the branch you are on. Do not create a branch, push, or open a
PR. Any argument the user passes is a hint for the commit message.

## 1. Look at what is staged

```bash
git update-index --refresh >/dev/null; git status --short
git branch --show-current
git diff --cached --stat
git diff --cached
```

- Commit **only what is staged**. Do not `git add` anything else, and never stage unstaged or
  untracked files unless the user asks.
- If nothing is staged, stop and tell the user. Do not stage files on your own.
- Read the staged diff before you write anything, so the commit describes the actual change.
- Stay on the current branch, even if it is `main`.

## 2. Commit

Use a conventional commit, `type(scope): summary`, in the imperative and under about 72 chars.
The scope is the area of the code (`bar`, `cocktails`, `menu`, …). Add a short body that says
what changed and why. End with the attribution line from the system reminder, if one is present.
Pass the message through a heredoc (`git commit -F - <<'EOF' … EOF`).

## 3. Report

Give the user the branch name and the commit subject. Do not push.
