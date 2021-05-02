// Aufgabe 1:


// a)


function min(): void {
let x: number = Math.min(5, 8, 70, 25, 9);

console.log(x);

}

min();

// b)

/*let b: number = 4;

function isEven(b: number): boolean {

console.log(false);

if (b / 2) {  

    

 }

}*/


// c)

interface Student {

name: string;

matr: number;

fach: string;

semester: number;

}

let student1: Student = {name: "Max", matr: 265987, fach: "OMB", semester: 2};
let student2: Student = {name: "Lea", matr: 265876, fach: "MIB", semester: 3};
let student3: Student = {name: "Marie", matr: 265765, fach: "MKB", semester: 1};






// tslint:disable-next-line: no-any
let studentArray: any = {"Student 1:": student1, "Student 2:": student2, "Student 3:": student3  };




function showInfo(): void {

console.log(studentArray["Student 1:"]);
console.log(studentArray["Student 2:"]);
console.log(studentArray["Student 3:"]);

}

showInfo();


// Aufgabe 2:


// a)
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010].reverse();


function backwards(arr: number[]): void {



console.log(arr);

}

backwards(arr);


// b)

let ar: number[] = [6, 7, 8, 9];
let arrr: number[] = [10, 11, 12, 13];

function join(ar: number[], arrr: number[]): void {

console.log(ar, arrr);

}

join(ar, arrr);



// Aufgabe 3.



let canvas1: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas1");
let context: CanvasRenderingContext2D = canvas1.getContext("2d");
context.lineWidth = 10;

context.strokeRect(75, 140, 150, 110);

context.fillRect(130, 190, 40, 60);

context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();

console.log(canvas1);

