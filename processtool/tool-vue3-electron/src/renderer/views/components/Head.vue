<style lang="scss">
.head {
  flex: 0 0 50px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6cb3ff;

  .title {
    font: bolder 20px sans-serif;
    text-indent: 2em;

    span {
      margin-left: 4px;
    }
  }

  .events {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .event {
      padding: 10px 20px;
      font-size: 18px;
      margin-left: 10px;
      color: #fff;
    }

    .event:hover {
      color: #2fff0b;
    }

    .event:active {
      color: #85ff03;
      text-decoration: underline;
    }
  }
}
</style>

<template>
  <div class="head">
    <div class="title">
      发包小工具
    </div>
    <div class="events">
      <div v-if="isMain" @click="min" class="event no-drag cursor-pointer">最小化</div>
      <div v-if="isMain" @click="maxMin" class="event no-drag cursor-pointer">最大化</div>
      <div @click="close" class="event no-drag cursor-pointer">关闭</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {argsState} from "@/renderer/store";
import {minWindow, maxMinWindow, closeWindow} from "@/renderer/utils";

export default defineComponent({
  name: "Head",
  setup() {
    const args = argsState();
    const isMain = args.isMainWin || false;

    function min() {
      minWindow();
    }

    function maxMin() {
      maxMinWindow(args.id);
    }

    function close() {
      if (isMain) closeWindow();
      else closeWindow(args.id);
    }

    return {min, maxMin, close, isMain}
  }
});
</script>
