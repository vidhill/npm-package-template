module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    plugins: ['prettier'],
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'prefer-const': 'error',
    },
    ignorePatterns: ['build/**/*'],
};
