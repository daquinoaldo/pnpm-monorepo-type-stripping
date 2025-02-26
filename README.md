# `pnpm` Monorepo with Type Stripping

This repo is meant to reproduce the [nodejs/node#57215](https://github.com/nodejs/node/issues/57215) issue.

Steps to reproduce:

```sh
pnpm install
pnpm --filter=my-app --prod deploy pruned
cd pruned
node src/index.ts
```
