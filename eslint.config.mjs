import { defineConfig } from 'eslint/config';
import tseslint from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  {
    ignores: ['node_modules/**']
  },
  ...tseslint.configs['flat/recommended'],
  {
    rules: {
      // project-specific rules can go here
    }
  }
]);
