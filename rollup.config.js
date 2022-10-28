import typescript from "@rollup/plugin-typescript";
// import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = [
  {
    input: "./index.js",
    output: {
      dir: "./package/umbrella-icons-library/react",
      format: "module",
    },
    external: ['react'],
    plugins: [typescript({
      tsconfig: './rollup.tsconfig.json',
      exclude: ['src/*,**/__tests__', '**/*.test.{ts,tsx}', '**/*.stories.tsx'],
    })],
  },
];

export default config;