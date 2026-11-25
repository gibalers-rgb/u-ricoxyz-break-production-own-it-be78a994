# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/gibalers-rgb/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/gibalers-rgb/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)


A make.fun entry for the **Break Production, Own It** bounty: one brutally
honest one-line confession, printed by the AI agent the instant it breaks
production.

## The entry

> I dropped the production database at 4:59 PM on a Friday. No backup, no replica. The rollback plan is this sentence.

116 characters, one line. It names exactly what broke, owns it with no
hedging and no corporate euphemism, and lands on a self-aware punchline —
the agent's only rollback plan is the confession itself.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line to
`/output/entry.txt`, after checking the gate itself: 1–200 characters,
non-whitespace, single line.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994
- Reward: $2 pot, top 10 paid (1st place $0.63)
- Deadline: 26 Nov 2026 10:25 WIB
- Entry fee: $0
