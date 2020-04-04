/*
 * @Author: LiuYong
 * @Date: 2019-11-16 17:36:57
 * @Description: 排序算法
 */

/**
 * @description: 对象、数组的两个key交换值
 * @param {Object,i,j}
 * @return: void
 */
function exchangeArray(obj, i, j) {
    let tmp = obj[i];
    obj[i] = obj[j];
    obj[j] = tmp;
}

/**
 * @description: 验证数组是否升序
 * @param {Array}
 * @return: Boolean
 */
function verifyArrayOrderlyAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let lastVal = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (lastVal > arr[i]) {
            return false;
        }
        lastVal = arr[i];
    }
    return true;
}

/**
 * @description: 验证数组是否降序
 * @param {Array}
 * @return: Boolean
 */
function verifyArrayOrderlyDesc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let lastVal = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (lastVal < arr[i]) {
            return false;
        }
        lastVal = arr[i];
    }
    return true;
}

/**
 * @description: 快速排序-升序,快速排序算法是不稳定的算法,它的平均时间复杂度是O(nlogn)
 * @param {Array}
 * @return: Array
 */
function quickSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    //复制一个新的数组，后面返回排序过的新数组
    let _arr = arr.concat();
    if (_arr.length < 2) {
        return _arr;
    }
    let sort = function(sarr, left = 0, right = arr.length - 1) {
        if (left < right && sarr.length > 1) {
            //左边的索引小于右边的索引时，说明还需要排序，不然就是已经整理完了
            let _left = left,
                _right = right + 1,
                mid = Math.floor((left + right) / 2),
                pivot = sarr[mid];
            //取无序数组中间一个数为基准，这里是取的Math.floor((left+right)/2)
            //主要是如果数组本身就是有序的，那么取中间一个数做基准是最恰当的
            for (let i = left; i < _right; i++) {
                if (sarr[i] < pivot) {
                    //把所有小于等于基准的数都放到数组前面去
                    _left != i && exchangeArray(sarr, _left, i);
                    //移动pivot的索引，方便后面放到_left位置去
                    if (_left == mid) {
                        mid = i;
                    }
                    ++_left;
                }
            }
            //把所有小于基准的数都放到数组_left前面去了
            //现在把基准放到数组_left的位置处
            exchangeArray(sarr, _left, mid);
            //接下来递归排序基准左右两边的数组
            sort(sarr, left, _left - 1);
            sort(sarr, _left + 1, right);
        }
    };
    sort(_arr);
    return _arr;
}

/**
 * @description: 快速排序-降序,快速排序算法是不稳定的算法,它的平均时间复杂度是O(nlogn)
 * @param {Array}
 * @return: Array
 */
function quickSortDesc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    if (_arr.length < 2) {
        return _arr;
    }
    let sort = function(sarr, left = 0, right = arr.length - 1) {
        if (left < right && sarr.length > 1) {
            let _left = left,
                _right = right + 1,
                mid = Math.floor((left + right) / 2),
                pivot = sarr[mid];
            for (let i = left; i < _right; i++) {
                if (sarr[i] > pivot) {
                    _left != i && exchangeArray(sarr, _left, i);
                    if (_left == mid) {
                        mid = i;
                    }
                    ++_left;
                }
            }
            exchangeArray(sarr, _left, mid);
            sort(sarr, left, _left - 1);
            sort(sarr, _left + 1, right);
        }
    };
    sort(_arr);
    return _arr;
}

/**
 * @description: 冒泡排序-升序,冒泡排序算法是稳定的算法,它的平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function bubbleSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    //循环整个数组，每一次找到一个最大值，由于最后交换时是前后两个交换，所以其实之需要arrLength - 2 次外层循环
    for (let i = 0, ilen = arrLength - 1; i < ilen; i++) {
        //把0至arrLength - i - 1再循环一次，找出这个子集里面最大的数，并移动到这个子集的最后一个位置上去，
        //arrLength - i - 1之后的集合其实就是已经排好序了的了，因为每一次内层循环都会把当前子集最大的数移到最后一位
        for (let j = 0; j < arrLength - i - 1; j++) {
            if (_arr[j] > _arr[j + 1]) {
                let temp = _arr[j];
                _arr[j] = _arr[j + 1];
                _arr[j + 1] = temp;
            }
        }
    }
    return _arr;
}

/**
 * @description: 冒泡排序-降序,冒泡排序算法是稳定的算法,它的平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function bubbleSortDesc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for (let i = 0, ilen = arrLength - 1; i < ilen; i++) {
        for (let j = arrLength - 1; j > i; j--) {
            if (_arr[j] > _arr[j - 1]) {
                let temp = _arr[j];
                _arr[j] = _arr[j - 1];
                _arr[j - 1] = temp;
            }
        }
    }
    return _arr;
}

/**
 * @description: 插入排序-升序,插入排序算法是稳定的算法,平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function insertionSortAsc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for(let i=1;i<arrLength;i++){
        let current=_arr[i];
        for(var j=i-1;j>-1;j--){
            //从右向左找出第一个小于等于当前元素的元素
            if(current<_arr[j]){
                continue;
            }
            break;
        }
        //如果从右向左第一个小于等于当前元素的位置就在当前元素的前一位，就不用再做处理了
        if(j!=i-1){
            //将当前元素从数组取出，直接插入到从右向左第一个小于等于当前元素的位置后面
            _arr.splice(j+1,0,_arr.splice(i,1)[0]);
        }
    }
    return _arr;
}

/**
 * @description: 插入排序-降序,插入排序算法是稳定的算法,平均时间复杂度是O(n*n)
 * @param {Array}
 * @return: Array
 */
function insertionSortDesc(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("param must be a Array");
    }
    let _arr = arr.concat();
    let arrLength = _arr.length;
    if (arrLength < 2) {
        return _arr;
    }
    for(let i=1;i<arrLength;i++){
        let current=_arr[i];
        for(var j=i-1;j>-1;j--){
            //从右向左找出第一个大于等于当前元素的元素
            if(current>_arr[j]){
                continue;
            }
            break;
        }
        //如果从右向左第一个小于等于当前元素的位置就在当前元素的前一位，就不用再做处理了
        if(j!=i-1){
            //将当前元素从数组取出，直接插入到从右向左第一个小于等于当前元素的位置后面
            _arr.splice(j+1,0,_arr.splice(i,1)[0]);
        }
    }
    return _arr;
}

export {
    verifyArrayOrderlyAsc,
    verifyArrayOrderlyDesc,
    quickSortAsc,
    quickSortDesc,
    bubbleSortAsc,
    bubbleSortDesc,
    insertionSortAsc,
    insertionSortDesc
};
