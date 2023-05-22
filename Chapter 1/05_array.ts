
let fibonacci: number[] = [1, 1, 2, 3, 4, 5];

let template_fibnacci: Array<number> = [1, 3, 4, 5, 6, 7];


// 用接口表示数组
interface NumberArray {
    [index: number]: number;
}

let testArray: NumberArray = [3, 5, 6];


// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

function sum() {
    let args = arguments;
    console.log(args);
}

sum();


let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];


