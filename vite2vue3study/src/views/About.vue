<template>
	<div class="about">
		<h1>about page</h1>
		{{ getTest }}
		<HelloWorld :msg="'msg:' + Math.random()"></HelloWorld>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
	name: 'About',
	computed: {
		...mapGetters(['getTest'])
	},
	components: { HelloWorld },
	methods: {},
	created() {
		console.log('this.$importEnv.MODE:' + this.$importEnv.MODE);
		console.log('this.$importEnv.BASE_URL:' + this.$importEnv.BASE_URL);
		console.log('this.$importEnv.PROD:' + this.$importEnv.PROD);
		console.log('this.$importEnv.DEV:' + this.$importEnv.DEV);
		console.log(
			'this.$importEnv.VITE_APP_TITLE:' + this.$importEnv.VITE_APP_TITLE
		);
	}
});
</script>
