<template>
  <div class="leftMenu">
    <router-link class="leftMenuLink" to="/">首页</router-link>
    <router-link class="leftMenuLink" to="/about">说明</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftMenu"
});
</script>

<style scoped lang="scss">
.leftMenu {
  padding: 30px 10px;
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  .leftMenuLink {
    font-weight: bold;
    color: #2c3e50;
    line-height: 42px;
    text-decoration: none;
    &:hover {
      color: #000913;
      text-decoration: underline;
    }
    &.router-link-exact-active {
      color: #42b983;
      cursor: default;
      &:hover {
        color: #42b983;
        text-decoration: none;
      }
    }
  }
}
</style>
