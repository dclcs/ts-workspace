function asdada(x: number, y: number): number {
    return x + y;
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}


interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function (source:string, subString: string) {
    return source.search(subString) != -1;
}

function push(array: any[], ...items: any) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);
console.log(a);


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse('ahshdd'));
console.log(reverse(321));