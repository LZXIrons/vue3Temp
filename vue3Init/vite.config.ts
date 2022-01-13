import { defineConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
function pathResolve(dir: string) {
	return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
	return {
		server: {
			host: '0.0.0.0',
			port: 3000,
			proxy: {
				'^/interface/': {
					target: 'http://192.168.24.99:3000/',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/interface/, '')
				}
			}
		},
		plugins: [
			vue(),
			viteMockServe({
				supportTs: true,
				mockPath: 'mock',
				localEnabled: command === 'serve',
				watchFiles: true
			})
		],
		resolve: {
			alias: [
				// /@/xxxx => src/xxxx
				{
					find: /\/@\//,
					replacement: pathResolve('src') + '/'
				}
			]
		},
		css: {
			//css预处理
			preprocessorOptions: {
				scss: {
					/*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
					additionalData: '@import "@/assets/scss/globalVariable.scss";'
				}
			}
		}
	}
})
