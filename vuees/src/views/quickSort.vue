<!--
 * @Author: your name
 * @Date: 2019-11-16 13:55:18
 * @LastEditTime: 2020-03-20 16:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gitee\study\vuees\src\views\quickSort.vue
 -->
<template>
  <div class="quickSort"></div>
</template>

<script>
import {
  quickSortAsc,
  quickSortDesc,
  verifyArrayOrderlyAsc,
  verifyArrayOrderlyDesc
} from "@assets/js/sort.js";
export default {
  name: "quickSort",
  methods: {},
  mounted() {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(Math.floor(Math.random() * 1000000));
    }
    let arr1 = arr.concat(),
      arr2 = arr.concat(),
      arr3 = arr.concat();
    console.time("quickSortAsc");
    arr1 = quickSortAsc(arr1);
    console.log(arr1.length)
    console.timeEnd("quickSortAsc");

    console.time("quickSortDesc");
    arr2 = quickSortDesc(arr2);
    console.timeEnd("quickSortDesc");

    console.time("quickSort3");
    arr3.sort(function(pre, next) {
      return pre - next;
    });
    console.timeEnd("quickSort3");
    
    console.log(verifyArrayOrderlyAsc(arr1));
    console.log(verifyArrayOrderlyDesc(arr2));
    console.log(verifyArrayOrderlyAsc(arr3));
    let arr4 = [1, 78, 32, 1, 9, 34, 23, 65, 3423, 4353, 12, 67, 12, 5];
    console.log(quickSortAsc(arr4));
    console.log(quickSortDesc(arr4));
  }
};
</script>
