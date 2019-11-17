/**
 * @description: 两个变量交换值
 * @param {any1,any2} 
 * @return: Array(any1,any2)
 */
function exchangeValue(variable1,variable2){
    let tmp=variable2;
    variable2=variable1;
    variable1=tmp;
    return [variable1,variable2];
}

/**
 * @description: 快速排序
 * @param {Array,left,right} 
 * @return: Array
 */
function quickSort(arr,left=0,right){
    if(!Array.isArray(arr)){
        return TypeError('参数必须是数组');
    }
    if(arr.length <= 1){
        return arr;
    }
    right=arr.length-1;
    let mid=Math.floor(right/2);
    while(true){
        if(arr[left]>arr[mid]){
            exchangeValue(arr[mid],arr[left]);
            ++left;
        }
        if(arr[right]<arr[mid]){
            exchangeValue(arr[mid],arr[right]);
            --right;
        }
    }
}

/**
 * @description: 快速排序
 * @param {Array} 
 * @return: Array
 */
function quickSort1(arr){
    if(!Array.isArray(arr)){
        return TypeError('参数必须是数组');
    }
    if(arr.length <= 1){
        return arr;
    }
    let left = [],
        right = [],
        datum = arr.splice(0,1);
    arr.forEach(val => {
        if(val > datum){
            right.push(val);
        }else{
            left.push(val);
        }
    });
    return quickSort(left).concat(datum,quickSort(right));
}
export {
    quickSort
};