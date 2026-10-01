---
name: ship-push
description: Commit the staged changes on the current branch and push them. No new branch, no PR. Use when the user says /ship-push or asks to commit and push the staged work.
disable-model-invocation: true
---

# /ship-push

Commit the **staged** changes on the branch you are on, then push it. Do not create a branch
and do not open a PR. Any argument the user passes is a hint for the commit message.

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
- Stay on the current branch, even if it is `main` — the user chose this skill over
  `/ship-branch`. If you are in a detached HEAD, stop and tell the user.

## 2. Commit

Use a conventional commit, `type(scope): summary`, in the imperative and under about 72 chars.
The scope is the area of the code (`bar`, `cocktails`, `menu`, …). Add a short body that says
what changed and why. End with the attribution line from the system reminder, if one is present.
Pass the message through a heredoc (`git commit -F - <<'EOF' … EOF`).

## 3. Push

```bash
git push -u origin HEAD
```

- Never force-push. If the push is rejected because the remote has moved, stop and tell the
  user rather than rebasing or merging on your own.

## 4. Report

Give the user the branch name and the commit subject.
