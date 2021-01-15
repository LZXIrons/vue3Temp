<style lang="scss">
</style>

<template>
  <div class="packageConfigInfo">
    packageConfigInfo
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: "packageConfigInfo",
  setup() {
    const data = reactive({
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
});
</script>
