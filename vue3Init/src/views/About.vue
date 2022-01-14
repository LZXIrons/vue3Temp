<template>
	<div class="about">
		<h1>about page</h1>
		{{ getTest }}
		<HelloWorld :msg="'msg:' + Math.random()"></HelloWorld>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
	name: 'About',
	computed: {
		...mapGetters(['getTest'])
	},
	components: { HelloWorld },
	methods: {},
	created() {
		console.log('MODE:' + import.meta.env.MODE)
		console.log('BASE_URL:' + import.meta.env.BASE_URL)
		console.log('PROD:' + import.meta.env.PROD)
		console.log('DEV:' + import.meta.env.DEV)
		console.log('VITE_APP_TITLE:' + import.meta.env.VITE_APP_TITLE)
	}
})
</script>
