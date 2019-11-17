<template>
  <div class="leftNavBars">
    <a href="/" title="首页">首页</a>
    <a href="/quickSort" title="快速排序">快速排序</a>
  </div>
</template>

<script>
export default {
  name: "leftNavLinks"
};
</script>

<style scoped lang="scss">
.leftNavBars{
  float: left;
  width:300px;
  height:100%;
  overflow-y: auto;
  font-size: 16px;
  line-height: 20px;
}
.leftNavBars a{
  display: block;
  text-align: left;
  text-indent: 2em;
  margin:10px auto;
  color: #333;
  text-decoration: none;
  &.actived{
    color: #999;
  }
  &:hover{
    color: #000;
    text-decoration: underline;
  }
}
</style>
