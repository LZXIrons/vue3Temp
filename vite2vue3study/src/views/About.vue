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
  methods: {}
});
</script>
