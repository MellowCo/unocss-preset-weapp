import antfu from '@antfu/eslint-config'

export default antfu(
  {
    regexp: {
      overrides: {
        'regexp/no-empty-capturing-group': 'off',
        'regexp/no-empty-group': 'off',
      },
    },
  },
  {
    ignores: [
      '*.global.js',
      'build',
      'node_modules',
      'interactive',
      'examples',
      'defaultConfig.ts',
      '*.json',
    ],
  },
  {
    rules: {
      'style/jsx-child-element-spacing': 'off',
      'ts/no-invalid-void-type': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: ['unocss'],
        },
      ],
    },
  },
  {
    files: [
      'playground/**/*.*',
      'examples/**/*.*',
    ],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    files: [
      '*.d.ts',
    ],
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
  {
    files: [
      '**/*.md/*.[jt]s',
    ],
    rules: {
      'no-restricted-imports': 'off',
      'no-restricted-syntax': 'off',
      'no-labels': 'off',
      'ts/no-unused-vars': 'off',
      'ts/no-var-requires': 'off',
    },
  },
)
