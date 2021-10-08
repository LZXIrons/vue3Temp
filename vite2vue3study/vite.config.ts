import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3000,
		proxy: {
			'^/interface/': {
				target: 'http://localhost:8000/',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/interface/, '')
			}
		}
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src'
		}
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
});
