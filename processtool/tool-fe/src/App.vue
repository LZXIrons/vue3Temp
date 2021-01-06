<template>
  <div class="pageContainer">
    <left-menu />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftMenu from "@/components/LeftMenu.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    "left-menu": LeftMenu
  }
});
</script>

<style lang="scss">
@import "@/assets/style/_reset.scss";
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
<style scoped lang="scss">
.pageContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
