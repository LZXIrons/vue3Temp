<template>
  <div class="quickSort">
  </div>
</template>

<script>
import {quickSortAsc,quickSortDesc,verifyArrayOrderlyAsc,verifyArrayOrderlyDesc} from '../assets/js/sort.js'
export default {
  name : "quickSort",
  methods : {
  },
  mounted(){
    let arr = [];
    for(let i=0;i<1000000;i++){
      arr.push(Math.floor(Math.random()*1000000));
    }
    let arr1=arr.concat(),
      arr2=arr.concat(),
      arr3=arr.concat();
    console.time('quickSortAsc');
    arr1=quickSortAsc(arr1);
    console.timeEnd('quickSortAsc');
    console.time('quickSortDesc');
    arr2=quickSortDesc(arr2);
    console.timeEnd('quickSortDesc');
    console.time('quickSort3');
    arr3.sort(function(pre,next){
      return pre-next;
    })
    console.timeEnd('quickSort3');
    console.log(verifyArrayOrderlyAsc(arr1));
    console.log(verifyArrayOrderlyDesc(arr2));
    console.log(verifyArrayOrderlyAsc(arr3));
    let arr4=[1,78,32,1,9,34,23,65,3423,4353,12,67,12,5];
    console.log(quickSortAsc(arr4));
    console.log(quickSortDesc(arr4));
  }
};
</script>
