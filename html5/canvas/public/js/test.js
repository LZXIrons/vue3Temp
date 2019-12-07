/*
 * @Author: your name
 * @Date: 2019-11-21 21:59:38
 * @LastEditTime: 2019-11-23 15:28:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gitee\study\html5\canvas\public\js\test.js
 */
"use strict";
const longVariable=1000;
let intVar=100;
class People{
    constructor(){
        this.userName="testPeople";
        this.age=27;
    }
    getAge(){
        return this.age;
    }
}
export {
    longVariable,
    intVar,
    People
}