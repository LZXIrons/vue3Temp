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
	font-size: $font-size-txtm;
}
p {
	@include text-overflow(3);
	&.bigtxt {
		font-size: $font-size-btxtl;
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
