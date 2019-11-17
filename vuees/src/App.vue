<template>
  <div id="app">
    <leftNavLinks />
    <div class="pageContent">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import leftNavLinks from "@/components/leftNavLinks.vue";

export default {
  name: "home",
  components: {
    leftNavLinks
  }
};
</script>

<style lang="scss">
#app {
  width:100%;
  height:100%;
  overflow: hidden;
}
.pageContent{
  height:100%;
  overflow-y: auto;
  float: left;
  max-width: calc(100% - 300px);
}
</style>
