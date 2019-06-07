export {}
let message : string = "Goodbye Everybody";
console.log(message);

let sum;
const title = 'tutorial';

let isbeginner:boolean = true;
let total:number = 0;
let name:string = 'iets';
let sentence: string = `dit wordt ${name}
dit is mijn eerste Typescript`

console.log(sentence);

let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let Myname: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Bob', 22];

enum Color{Red=5, Green,Blue};
let c: Color = Color.Green;
console.log(c);

let randomvalue: unknown = 10;
    randomvalue = true;
    randomvalue = 'iets';

    let a;
    a = 10;
    a = true;

    let b = 20;

    let multitype: number | boolean;
    multitype = 20;
    multitype = true;