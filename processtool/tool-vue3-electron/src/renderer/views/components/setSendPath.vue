<style lang="scss">
</style>

<template>
  <div class="setSendPath">
    setSendPath
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: "setSendPath",
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