<template>
	<div class="home">
		<button @click="goabout">go about</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
	name: 'Home',
	methods: {
		...mapMutations(['addTest']),
		goabout() {
			this.addTest()
			this.$router.push('/about')
		}
	}
})
</script>
