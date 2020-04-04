<template>
    <div class="insertionSort"></div>
</template>

<script>
import {
    insertionSortAsc,
    insertionSortDesc,
    halveInsertionSortAsc,
    halveInsertionSortDesc,
    verifyArrayOrderlyAsc,
    verifyArrayOrderlyDesc
} from "@assets/js/sort.js";
export default {
    name: "insertionSort",
    methods: {},
    mounted() {
        let arr = [];
        for (let i = 0; i < 10000; i++) {
            arr.push(Math.floor(Math.random() * 1000000));
        }

        let arr1 = arr.concat();
        console.time("insertionSortAsc");
        arr1 = insertionSortAsc(arr1);
        console.timeEnd("insertionSortAsc");
        console.log(verifyArrayOrderlyAsc(arr1));

        let arr2 = arr.concat();
        console.time("insertionSortDesc");
        arr2 = insertionSortDesc(arr2);
        console.timeEnd("insertionSortDesc");
        console.log(verifyArrayOrderlyDesc(arr2));

        let arr3 = arr.concat();
        console.time("halveInsertionSortAsc");
        arr3 = halveInsertionSortAsc(arr3);
        console.timeEnd("halveInsertionSortAsc");
        console.log(verifyArrayOrderlyAsc(arr3));

        let arr4 = arr.concat();
        console.time("halveInsertionSortDesc");
        arr4 = halveInsertionSortDesc(arr4);
        console.timeEnd("halveInsertionSortDesc");
        console.log(verifyArrayOrderlyDesc(arr4));
    }
};
</script>
