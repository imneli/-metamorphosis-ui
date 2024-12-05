import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: false, 
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'react-icons'
  ],
  treeshake: true,
  outDir: 'dist',
  minify: false,
  esbuildOptions(options) {
    options.sourcemap = false 
  }
});