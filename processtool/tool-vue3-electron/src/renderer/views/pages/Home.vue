<style lang="scss">
.contentbody {
  flex: 1 1 auto;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: blue;
  display: flex;
}
.leftMenuStyle{
  flex: 0 0 100px;
  overflow-y: auto;
}
.rightContent{
  flex: 1 1 auto;
  overflow-y: auto;
}
</style>

<template>
  <div class="main">
    <Head></Head>
    <div class="contentbody">
      <!-- <div>内部资源内容: {{ readFileSync(getInsidePath("t.txt")).toString() }}</div>
      <div>外部资源内容: {{ readFileSync(getExternPath("t.txt")).toString() }}</div> -->
      <div class="leftMenuStyle">
        <left-menu @tab-change="tabChange" />
      </div>
      <div class="rightContent">
        <packageConfigInfo v-show="actContentKey=='packageConfigInfo'" />
        <setSendPath v-show="actContentKey=='setSendPath'" />
        <sendPackages v-show="actContentKey=='sendPackages'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onUnmounted, watch, reactive, toRefs} from "vue";
import Head from "../components/Head.vue";
import LeftMenu from '../components/LeftMenu.vue';
import packageConfigInfo from '../components/packageConfigInfo.vue';
import sendPackages from '../components/sendPackages.vue';
import setSendPath from '../components/setSendPath.vue';
import {readFileSync} from "fs";
import {argsState, messageData} from "@/renderer/store";
import {createWindow} from "@/renderer/utils";
import {getInsidePath, getExternPath, getGlobal} from "@/lib";
import {WindowOpt} from "@/lib/interface";

export default defineComponent({
  components: {
    Head,
    'left-menu': LeftMenu,
    packageConfigInfo,
    setSendPath,
    sendPackages
  },
  name: "Home",
  setup() {
    const args = argsState();
    const data = reactive({
      actContentKey:'packageConfigInfo'
    })
    const refData = toRefs(data)

    let watchTest = watch(() => messageData["test"], (n, o) => { // n 为新赋值 o为旧值
      console.log(n, o)
    });

    function tabChange(item:{key:string}){
      data.actContentKey = item.key
      console.log(item)
    }

    onUnmounted(() => {
      watchTest()
    })

    return {
      ...refData,
      readFileSync,
      getInsidePath,
      getExternPath,
      tabChange
    }
  }
});
</script>
