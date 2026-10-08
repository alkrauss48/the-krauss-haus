---
name: ship-pr
description: Ship the staged changes — create a new branch, commit what is staged, push it, and open a draft PR with gh. Use when the user says /ship-pr or asks to ship, branch-commit-push-PR, or open a PR for the staged work.
disable-model-invocation: true
---

# /ship-pr

Take the **staged** changes to a draft pull request in one pass. Any argument the user passes
is a hint for the branch name, commit message, or PR focus.

## 1. Look at what is staged

```bash
git update-index --refresh >/dev/null; git status --short
git diff --cached --stat
git diff --cached
```

- Commit **only what is staged**. Do not `git add` anything else, and never stage unstaged or
  untracked files unless the user asks.
- If nothing is staged, stop and tell the user. Do not stage files on your own.
- Read the staged diff before you write anything, so the branch name, commit, and PR describe
  the actual change.

## 2. Branch

- If you are on `main`, create a branch: `git switch -c <type>/<short-kebab-summary>`, with
  `<type>` matching the commit type (`feat`, `fix`, `refactor`, `docs`, `chore`, …), e.g.
  `feat/bar-live-consult`.
- If you are already on a feature branch, stay on it and commit there.

## 3. Commit

Use a conventional commit, `type(scope): summary`, in the imperative and under about 72 chars.
The scope is the area of the code (`bar`, `cocktails`, `menu`, …). Add a short body that says
what changed and why. End with the attribution line from the system reminder, if one is present.
Pass the message through a heredoc (`git commit -F - <<'EOF' … EOF`).

## 4. Push

```bash
git push -u origin HEAD
```

## 5. Open a draft PR

`gh` is already authenticated. Call it directly, without setting `GH_TOKEN`:

```bash
gh pr create --draft --base main \
  --title "<same as the commit subject>" \
  --body "$(cat <<'EOF'
## Summary
- <bullets describing the change>

## Test plan
- [ ] <how to verify>

<PR attribution line from the system reminder, if present>
EOF
)"
```

- Always open it as a **draft**.
- If `gh` reports that it is not authenticated, stop and tell the user to run `gh auth login`.
- If a PR for this branch already exists, `gh` will say so. Report the existing URL instead of
  opening a second one.

## 6. Report

Give the user the branch name, the commit subject, and the PR URL.
