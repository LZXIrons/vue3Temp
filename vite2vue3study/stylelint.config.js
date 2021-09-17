module.exports = {
	root: true,
	plugins: ['stylelint-order', 'stylelint-scss'],
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	rules: {
		'declaration-colon-space-before': 'never',
		'declaration-colon-space-after': 'always-single-line',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['include']
			}
		],
		'rule-empty-line-before': ['never']
	}
};
