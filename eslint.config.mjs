// @ts-check
import eslint from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: [
      'eslint.config.mjs',
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.env.*',
      '.env',
      '*.json',
      '*.yml',
      '.vscode',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      prettier: prettierPlugin,
      unicorn,
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          avoidEscape: true,
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unused-imports/no-unused-imports': 'warn', // TODO modify to error
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: 'tsconfig.json',
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-return-await': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'warn',
      'max-lines': [
        'error',
        { max: 125, skipBlankLines: true, skipComments: true },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'never', prev: 'import', next: 'import' },
      ],
      eqeqeq: ['error', 'always'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'max-depth': ['warn', 3], // TODO modify to error & 2
      'max-lines-per-function': [
        'warn',
        { max: 50, skipBlankLines: true, skipComments: true }, // TODO modify to error & 35
      ],
      'max-statements': ['warn', 20], // TODO modify to error & 16
      'max-params': ['warn', 3], // TODO replace to error, skip constructor, change to 2
      '@typescript-eslint/naming-convention': [
        // TODO review this rules
        'warn', // TODO modify to error
        {
          selector: ['variable', 'classMethod'],
          format: ['camelCase'],
        },
        {
          selector: ['function'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: ['typeLike'],
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn', // TODO review rules & modify to error
        {
          allowArgumentsExplicitlyTypedAsAny: false,
          allowDirectConstAssertionInArrowFunctions: true,
          allowedNames: [],
          allowHigherOrderFunctions: true,
          allowOverloadFunctions: false,
          allowTypedFunctionExpressions: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      'max-lines-per-function': [
        'warn',
        { max: 120, skipBlankLines: true, skipComments: true }, // TODO modify to error & 80
      ],
    },
  },
);
