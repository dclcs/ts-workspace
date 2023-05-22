interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

// 可选属性
interface Person2 {
    readonly id: number; // 只读属性
    name: string;
    age?: number; // 可选属性
    [propName: string]: any; // 任意属性
}

let tom2: Person2 = {
    id: 89757,
    name: 'Tom2',
    // age: 100
}

let tom3: Person2 = {
    id: 89758,
    name: 'Tom3',
    // age: 100,
    gender: 'male'
}

