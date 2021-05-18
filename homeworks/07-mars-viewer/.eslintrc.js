module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    rules:{
      "import/prefer-default-export": "off",
      "allowForLoopAfterthoughts": "off",
      "linebreak-style": ["error", "windows"],
      "react/react-in-jsx-scope": "off",
    }
  }