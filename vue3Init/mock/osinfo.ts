// 仅做示例: 通过GET请求返回一个名字数组
// https://www.npmjs.com/package/vite-plugin-mock
export default [
	{
		url: '/osinfo/all',
		method: 'get',
		response: (): {
			code: number
			message: string
			data: string[]
		} => {
			return {
				code: 0,
				message: 'ok',
				data: ['tom', 'jerry']
			}
		}
	}
]
