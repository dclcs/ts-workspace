let myFavoriteNumber2: string | number; // 允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;


let myFavoriteNumber3: string | number;
myFavoriteNumber3 = 'seven';
console.log(myFavoriteNumber3.length); // 5
myFavoriteNumber3 = 7;
// console.log(myFavoriteNumber3.length); // wrong