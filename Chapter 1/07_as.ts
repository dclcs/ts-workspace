
interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

// 将一个父类断言为更加具体的子类§

interface ApiError extends Error {
    code: number;
}

interface HttpError extends Error {
    statuscode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
    // if (error instanceof ApiError) {
    //     return true;
    // }
    // return false;
}


interface Animal2 {
    name: string;
}

interface Cat2 {
    name: string;
    run(): void;
}

let tom4: Cat2 = {
    name: 'Tom3',
    run: () => { console.log('run'); }
};
// TypeScript 并不关心 Cat 和 Animal 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 Cat extends Animal 是等价的：
let animal: Animal2 = tom4;

