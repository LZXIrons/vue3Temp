export {};
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$importEnv: {
			MODE: '';
			BASE_URL: '';
			PROD: '';
			DEV: '';
			VITE_APP_TITLE: '';
		};
	}
}
