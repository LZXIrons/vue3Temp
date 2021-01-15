<style lang="scss">
.lm_list{
  width:100%;
}
.lml_item{
  color: aquamarine;
  font-size: 16px;
  line-height: 24px;
  margin: 25px 0;
  -webkit-app-region: no-drag;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  &.active{
    cursor: default;
    color: aqua;
    text-decoration: underline;
  }
}
</style>

<template>
  <ul class="lm_list">
    <li class="lml_item" :class="{active:actInd==index}" v-for="(item,index) in menuList" :key="index" @click="tabChange($event,item,index)">{{item.name}}</li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: "LeftMenu",
  setup() {
    const data = reactive({
      actInd:0,
      menuList:[
        {
          name:'发包',
          key:'sendPackages'
        },
        {
          name:'路径配置',
          key: 'setSendPath'
        },
        {
          name:'压缩包名称对应配置',
          key: 'packageConfigInfo'
        }
      ]
    })
    const refData = toRefs(data)

    function tabChange(event:object,item:object,index:number){
      if(data.actInd==index){
        return
      }
      data.actInd=index
      this.$emit('tab-change',item)
    }
    return {
      ...refData,
      tabChange
    }
  }
});
</script>
