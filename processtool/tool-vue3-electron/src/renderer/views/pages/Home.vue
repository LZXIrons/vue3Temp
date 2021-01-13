<style lang="scss">
.info {
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: blue;
}
</style>

<template>
  <div class="main">
    <Head></Head>
    <div class="info">
      <div>内部资源内容: {{ readFileSync(getInsidePath("t.txt")).toString() }}</div>
      <div>外部资源内容: {{ readFileSync(getExternPath("t.txt")).toString() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onUnmounted, watch} from "vue";
import Head from "../components/Head.vue";
import {readFileSync} from "fs";
import {argsState, messageData} from "@/renderer/store";
import {createWindow} from "@/renderer/utils";
import {getInsidePath, getExternPath, getGlobal} from "@/lib";
import {WindowOpt} from "@/lib/interface";

export default defineComponent({
  components: {
    Head
  },
  name: "Home",
  setup() {
    const args = argsState();
    let watchTest = watch(() => messageData["test"], (n, o) => { // n 为新赋值 o为旧值
      console.log(n, o)
    });

    onUnmounted(() => {
      watchTest()
    })

    return {
      readFileSync,
      getInsidePath,
      getExternPath,
      test,
      toAbout
    }
  }
});
</script>
