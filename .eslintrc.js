module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    plugins: ['prettier', 'import', 'unicorn'],
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'prefer-const': 'error',
        'import/no-unresolved': 'error',
        'no-useless-rename': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/explicit-length-check': 'error',
    },
    ignorePatterns: ['build/**/*'],
    overrides: [
        {
            // unit test overrides
            files: ['jest-config/*', '*.spec.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            env: {
                jest: true,
            },
        },
    ],
};
