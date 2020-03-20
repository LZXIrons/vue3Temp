<template>
    <div class="bubbleSort"></div>
</template>

<script>
import {
    bubbleSortAsc,
    bubbleSortDesc,
    verifyArrayOrderlyAsc,
    verifyArrayOrderlyDesc
} from "@assets/js/sort.js";
export default {
    name: "bubbleSort",
    methods: {},
    mounted() {
        let arr = [];
        for (let i = 0; i < 10000; i++) {
            arr.push(Math.floor(Math.random() * 1000000));
        }

        let arr1 = arr.concat();
        console.time("bubbleSortAsc");
        arr1 = bubbleSortAsc(arr1);
        console.timeEnd("bubbleSortAsc");
        console.log(verifyArrayOrderlyAsc(arr1));

        let arr2 = arr.concat();
        console.time("bubbleSortDesc");
        arr2 = bubbleSortDesc(arr2);
        console.timeEnd("bubbleSortDesc");
        console.log(verifyArrayOrderlyDesc(arr2));
    }
};
</script>
