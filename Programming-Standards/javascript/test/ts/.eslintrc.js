module.exports = {
    extends: ['../base/.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: [
        './tsconfig.json',
      ],
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'brace-style': 'off',
        'no-empty-function': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/491
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'react/sort-comp': 'off',
        'func-call-spacing': 'off',
        'comma-spacing': 'off',
        'dot-notation': 'off',
        'func-call-spacing': 'off',
        indent: 'off',
        'keyword-spacing': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        quotes: 'off',
        semi: 'off',
        'space-before-function-paren': 'off'
    },
};
