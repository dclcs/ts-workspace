
// ------------------------- 布尔值 -----------------------
let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);
// Boolean 返回一个`Boolean`对象
let createdByNewBoolean: Boolean = new Boolean(1);
// 直接调用 Boolean 也可以返回一个 boolean 类型：
let createdByBoolean = new Boolean(1);

// ------------------------- 数  值 -----------------------
let decLiteral: number = 6
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// ------------------------- 字符串 -----------------------
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sentence)

// ------------------------- 空值 -----------------------
function alertName(): void {
    alert("My name is Tom");
}

let unusable: void = undefined;


// ------------------------- NULL 和 Undefined -----------------------

let u: undefined = undefined;
let n: null = null;

let num1: number = undefined;  // strict 模式下会报错