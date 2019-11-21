/*
 * @Author: LiuYong
 * @Date: 2019-11-16 17:36:57
 * @LastEditTime: 2019-11-21 16:20:41
 * @LastEditors: Please set LastEditors
 * @Description: 排序算法
 */

/**
 * @description: 对象、数组的两个key交换值
 * @param {Object,i,j} 
 * @return: void
 */
function exchangeArray(obj,i,j){
    let tmp=obj[i];
    obj[i] = obj[j];
    obj[j] = tmp;
}

/**
 * @description: 验证数组是否升序
 * @param {Array} 
 * @return: Boolean
 */
function verifyArrayOrderlyAsc(arr){
    if(!Array.isArray(arr)){
        throw TypeError('param must be a Array');
    }
    let lastVal=arr[0];
    for(let i=1,len=arr.length;i<len;i++){
        if(lastVal>arr[i]){
            return false;
        }
        lastVal=arr[i];
    }
    return true;
}

/**
 * @description: 验证数组是否降序
 * @param {Array} 
 * @return: Boolean
 */
function verifyArrayOrderlyDesc(arr){
    if(!Array.isArray(arr)){
        throw TypeError('param must be a Array');
    }
    let lastVal=arr[0];
    for(let i=1,len=arr.length;i<len;i++){
        if(lastVal<arr[i]){
            return false;
        }
        lastVal=arr[i];
    }
    return true;
}

/**
 * @description: 快速排序-升序,快速排序算法是不稳定的算法
 * @param {Array} 
 * @return: Array
 */
function quickSortAsc(arr) {
    let sort=function(sarr, left=0, right=arr.length-1){
        if(left<right && sarr.length>1){
            //左边的索引小于右边的索引时，说明还需要排序，不然就是已经整理完了
            let _left=left,
                _right=right+1,
                mid=Math.floor((left+right)/2),
                pivot = sarr[mid];
            //取无序数组中间一个数为基准，这里是取的Math.floor((left+right)/2)
            //主要是如果数组本身就是有序的，那么取中间一个数做基准是最恰当的
            for(let i=left;i<_right;i++){
                if(sarr[i]<pivot){
                    //把所有小于等于基准的数都放到数组前面去
                    _left!=i && exchangeArray(sarr,_left,i);
                    //移动pivot的索引，方便后面放到_left位置去
                    if(_left==mid){
                        mid=i;
                    }
                    ++_left;
                }
            }
            //把所有小于基准的数都放到数组_left前面去了
            //现在把基准放到数组_left的位置处
            exchangeArray(sarr,_left,mid);
            //接下来递归排序基准左右两边的数组
            sort(sarr, left, _left-1);
            sort(sarr, _left+1, right);
        }
    }
    //复制一个新的数组，后面返回排序过的新数组
    let _arr=arr.concat();
    sort(_arr);
    return _arr;
}

/**
 * @description: 快速排序-降序,快速排序算法是不稳定的算法
 * @param {Array} 
 * @return: Array
 */
function quickSortDesc(arr) {
    let sort=function(sarr, left=0, right=arr.length-1){
        if(left<right && sarr.length>1){
            let _left=left,
                _right=right+1,
                mid=Math.floor((left+right)/2),
                pivot = sarr[mid];
            for(let i=left;i<_right;i++){
                if(sarr[i]>pivot){
                    _left!=i && exchangeArray(sarr,_left,i);
                    if(_left==mid){
                        mid=i;
                    }
                    ++_left;
                }
            }
            exchangeArray(sarr,_left,mid);
            sort(sarr, left, _left-1);
            sort(sarr, _left+1, right);
        }
    }
    let _arr=arr.concat();
    sort(_arr);
    return _arr;
}

export {
    quickSortAsc,
    quickSortDesc,
    verifyArrayOrderlyAsc,
    verifyArrayOrderlyDesc
};