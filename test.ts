
console.log();

let tup: [string, number, boolean] = ['sfa', 32, false,];

let example: string[] = ['sda', 'adf', 'fsd'];
let numberExm: number[] = [ 12, 32, 3, 12, 432];

let tupp: [number[], string[], boolean[]] = [[1, 32, 54,], ['qere', 'erq', 'reqr'], [false, true, true] ];


function greet(name : string | number): string | number {
    return name;
}

example.map((x: string) => x + 'hi' );


function coord(current: {lat?: number, long?: number}) {
}


let uniqId: string | number = 'faad';
uniqId = 232;

function great(name: string | string[]) {
    if (Array.isArray(name)) {
        console.log(name.forEach((i: string) => i + 'hi' ));
    } else {
        name.toLowerCase();
    }
}


type coord = {
    lat: number,
    long: number,
    id: number | string | boolean,
    place?: string
}


interface ICoord  {
    lat: number;
    long: number;
    id: number | string | boolean;
    place: string
}


function community(data: ICoord) {
    data.id = 'adfasdf',
    data.long = 13453454334644.343224,
    data.lat = 3243.4534,
   data.place = 'russian'

    return console.log(data); 
}


interface Animal {
    name: string;
    isLive: boolean;
}

interface Dog extends Animal {
    tail?: boolean;
}


const paper: Dog = {
    name: 'telepuzik',
    isLive: false,
    tail: true
}


type home = {
    rooms: number,
    street: string,
    price: number
};


type myHome = home & {
    whoI: string,
    age: number
};

let examp: myHome = {
    whoI: 'osman',
    age: 23,
    rooms: 3,
    street: 'Pushkina 15',
    price: 33333333
}


function multiply(a: number, b: number): number {
    return a * b;
}


function cancat(a: string, b: string | number): string {
    return a + b;
}


const array: Function[] = [cancat, multiply];


interface water {
    isHas: boolean;
}

const juice: water = {
    isHas: true,
    price: 3223
}

interface water {
    price: number
}

