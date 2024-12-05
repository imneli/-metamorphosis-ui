export * from './Button';
export * from './Input';
export * from './Badge';
export * from './Separator';
export * from './Headers/HeaderOne';
export * from './Cta';

export { cn } from '@/lib/utils';

import type { Config } from 'tailwindcss';

const preset = {
  content: [
    "./node_modules/metamorphosis-ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  }
} satisfies Config;

export default preset;