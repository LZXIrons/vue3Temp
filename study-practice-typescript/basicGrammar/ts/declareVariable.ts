let a:string='a';
console.log(typeof a);
let b;
b=2;
b='test str';
console.log(a+b);
//let [变量名]:[类型] = 值;
let myName:string='testName';
let myName2:number=<number> <any>myName;
let ageName:number=20;
//ageName=<number><any>myName;
ageName=parseInt(myName);
console.log(ageName)

//类型推断
let type1:any='testType';
type1=10;