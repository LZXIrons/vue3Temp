<template>
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'App',
	components: {}
})
</script>

<style>
#app {
	margin-top: 60px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	text-align: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
