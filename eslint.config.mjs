import antfu from '@antfu/eslint-config';

export default antfu(
    {
        typescript: true,
        react: true,
        stylistic: false
    },
    {
        // Переопределение дефолтных правил antfu-конфига
        name: 'rewrite',
        rules: {
            'antfu/curly': 'off',
            'antfu/if-newline': 'off',
            'antfu/top-level-function': 'off',
            'no-console': 'warn',
            'react-hooks/exhaustive-deps': 'off',
            'test/prefer-lowercase-title': 'off',
            'css/empty-rules': 'off',
            'test/consistent-test-it': 'off'
        }
    },
    {
        name: 'sort',
        rules: {
            // Сортировка импортов
            'perfectionist/sort-imports': [
                'error',
                {
                    groups: [
                        'type',
                        ['builtin', 'external'],
                        'internal-type',
                        ['internal'],
                        ['parent-type', 'sibling-type', 'index-type'],
                        ['parent', 'sibling', 'index'],
                        'object',
                        'style',
                        'side-effect-style',
                        'unknown'
                    ],
                    internalPattern: ['^~/.*', '^@/.*'],
                    newlinesBetween: 'always',
                    order: 'asc',
                    type: 'natural'
                }
            ],
            // Сортировка полей интерфейсов
            'perfectionist/sort-interfaces': [
                'error',
                {
                    groups: ['unknown', 'method', 'multiline'],
                    order: 'asc',
                    type: 'alphabetical'
                }
            ],
            // Сортировка пропсов JSX
            'perfectionist/sort-jsx-props': [
                'error',
                {
                    customGroups: {
                        callback: 'on*',
                        reserved: ['key', 'ref']
                    },
                    groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
                    order: 'asc',
                    type: 'alphabetical'
                }
            ],
            // Сортировка типов внутри объединенний и пересечений
            'perfectionist/sort-union-types': [
                'error',
                {
                    groups: [
                        'conditional',
                        'function',
                        'import',
                        'intersection',
                        'keyword',
                        'literal',
                        'named',
                        'object',
                        'operator',
                        'tuple',
                        'union',
                        'nullish'
                    ],
                    order: 'asc',
                    specialCharacters: 'keep',
                    type: 'alphabetical'
                }
            ]
        }
    },
    {
        ignores: ['dist/', 'build/', 'node_modules/', '!.storybook']
    }
);
