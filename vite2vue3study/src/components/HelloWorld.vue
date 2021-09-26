<script setup lang="ts">
import { ref } from 'vue';

defineProps({ msg: String });

const count = ref(0);
</script>

<template>
	<p class="title">title title</p>
	<p class="bigtxt">big txt</p>
	<p>{{ msg }}</p>
	<button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/mixin.scss';
p,
button {
	position: relative;
	display: flex;
	margin: 0;
	font-size: $font-size-txtm;
	color: #f00;
}
p {
	@include text-overflow(3);
	&.bigtxt {
		display: block;
		font-size: $font-size-btxtl;
		color: red;
	}
	&.title {
		font-size: $font-size-titles;
		@include userselect($page-user-select);
	}
}
button {
	@include box-shadow;
}
</style>
