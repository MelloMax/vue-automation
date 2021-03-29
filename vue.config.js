const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')
const spritesmithPlugin = require('webpack-spritesmith')

module.exports = {
	// ... other options ...
	publicPath: './',
	chainWebpack: config => {},
	configureWebpack: {
		target: 'web',
		plugins: [
			new VueAutoRoutingPlugin({
				// Path to the directory that contains your page components.
				pages: 'src/views',
				// A string that will be added to importing component path (default @/pages/).
				importPrefix: '@/views/',
			}), // 路由自动化
			// eslint-disable-next-line new-cap
			new spritesmithPlugin({
				src: {
					cwd: resolve('src/assets/images'),
					glob: '*.png',
				},
				target: {
					image: resolve('src/spritesmith-generated/sprite.png'),
					css: resolve('src/spritesmith-generated/sprite.scss'),
				},
				apiOptions: {
					cssImageRef: '~sprite.png',
				},
				spritesmithOptions: {
					padding: 20,
				},
			}),
		],
	},
}
