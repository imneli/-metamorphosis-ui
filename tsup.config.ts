import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: [
    'react',
    'react-dom',
    'class-variance-authority',
    'clsx',
    'tailwind-merge'
  ],
  clean: true,
  treeshake: true,
  splitting: true,
  sourcemap: true,
});