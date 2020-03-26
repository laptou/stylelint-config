module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  rules: {
    'comment-empty-line-before': ['always', {
      ignore: ['stylelint-commands', 'after-comment']
    }],
    'declaration-colon-space-after': 'always',
    'block-closing-brace-empty-line-before': ['never'],
    'block-closing-brace-newline-after': ['always'],
    'block-opening-brace-newline-after': ['always-multi-line'],
    'block-opening-brace-space-before': ['always'],
    'block-opening-brace-space-after': ['always-single-line'],
    'block-closing-brace-space-before': ['always-single-line'],
    'selector-combinator-space-before': ['always'],
    'selector-combinator-space-after': ['always'],
    'selector-list-comma-space-after': ['always'],
    'selector-list-comma-space-before': ['never'],
    'declaration-block-semicolon-space-after': ['always-single-line'],
    'declaration-block-semicolon-newline-after': ['always'],
    'indentation': 2,
    'max-empty-lines': 2,
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment']
    }]
  }
}
