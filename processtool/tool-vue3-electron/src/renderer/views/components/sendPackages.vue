<style lang="scss">
</style>

<template>
  <div class="sendPackages">
    sendPackages
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: "sendPackages",
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