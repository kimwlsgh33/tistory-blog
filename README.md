# hello-fp

Tistory hELLO 스킨 개발을 위한 프로그램

## Instruction

```bash
bun install
```

## Dependencies

1. typescript

   - Develop with static types

2. tailwindcss (style.css)

   - Easy styling with no use of css

3. disable-devtools

   - disable browser's devtools

## Usage

To test on broswer:

```bash
bun run dev
```

To build for release:

```bash
bun run build
```

## Announce

Vite's build recognize <code>skin.html</code> in <code>vite.config.js</code>, then it builds all the files that connected with skin.html file.

If you doesn't want to use disable-devtools, remove import line for <code>utils.ts</code> in <code>skin.html</code>

This project was created using `bun init` in bun v1.0.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
