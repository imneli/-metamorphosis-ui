import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/components/index.ts', 'src/ui/styles/index.css'],
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
    entry: 'src/ui/components/index.ts'
  },
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  external: [
    'react',
    'react-dom',
    'next',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'react-icons'
  ],
  outDir: 'dist'
});