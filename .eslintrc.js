module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	extends: ['plugin:prettier/recommended'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'warn',
		'prettier/prettier': 'warn',
	},
}
