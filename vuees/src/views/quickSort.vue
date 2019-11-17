<template>
  <div class="quickSort">
  </div>
</template>

<script>
import {quickSort} from '../assets/js/sort.js'
export default {
  name : "quickSort",
  methods : {
  },
  mounted(){
    let arr = [1,4,456,2,2134,5,56,67,435,23,3,3,33,34,42,32432,23,2];
    let sortArr = quickSort(arr);
    console.log(sortArr)
  }
};
</script>
