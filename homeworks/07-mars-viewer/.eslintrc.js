module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules:{
      "import/prefer-default-export": "off",
      "allowForLoopAfterthoughts": "off",
    }
  }