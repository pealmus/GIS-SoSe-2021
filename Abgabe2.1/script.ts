
//x Aufgabe 1 
function a1(): void {
    let tEST123$: string = "Alles ";
    
    console.log(tEST123$);

    func1();

    console.log(tEST123$);

    func2();

    console.log(tEST123$);

    func3();


    
}

a1();

function func1(): void {
console.log("Gute");
}

function func2(): void {
    console.log("Klar?");
}
function func3(): void {
    console.log("Logo!");
}




// a) Kommentare:
// Durch das einbinden von func1 wird das "geht es" zwischen "Wie" und "dir?" in der Konsole angezeigt.
// Es können Zahlen von 0-9, alle Buchstaben und die Sonderzeichen "$" und "_" für die Variable verwendet werden.


// b) 

// c) Alles Gute! Alles klar? Alles Logo!



// Aufgabe 2: Vermutungen:
// Die Variable wird mit number = 9 auf 9 festgelegt.
// Da der console.log allerdings vor "i=i-1" ausgegeben wird, vermute ich, dass auf der Console 9 angezeigt wird.



function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();


// Tatsächlich:
// Da nach der ersten Console.log Ausgabe -1 gerechnet wird, wird beim zweiten aufrufen durch "a2();" die 8 aufgerufen und angezeigt. Dies wird so lange durchgeführt bis "i > 0". D.h. es wird runtergezählt bis 1.



// Aufgabe 3:
//Wenn das Programm die gemachten Fehler nachvollziehen kann gibt es und direkt Lösungsvorschläge. Bei kleineren Fehlern ändert es das Programm für uns nachdem wir auf die Glühbirne gedrückt haben.




// Aufgabe 4: a) Vermutung:
// Ausgabe: Hallo Bla(func4), Hallo Blubb(func5), Test(func6) Hallo

let x: string = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x);

function func4 (y: string): void {
    y = "Bla";
    console.log(y);
}

function func5 (): void {
    let x: string = "Blubb";
    console.log(x);
}

function func6 (): void {
    x = "Test";
}


// Tatsächlich: Das Letzte Hallo wird nicht angezeigt, da "x" in func6 zu "Test" wird und beim letzten console.log dann auch als Test ausgegeben.


// Aufgabe 4 b) Variablen die mit var, let und const deklariert werden oder in einer Function eingebunden sind bezeichnet man als lokale Variablen. das Problem bei Globalen Variablen ist, dass diese von anderen Skripten übernommen werden können was in manchen fällen unvorteilhaft sein kann.


// Aufgabe 5:

// a)
let z: number = 10;
let y: number = 10;
multiply();


function multiply (): void {
    console.log(z * y);
}

// b)

let d: number = 9;
let h: number = 10;
max();


function max (): void {

    if (d > h)
    console.log(d);

    if (d < h)
    console.log(h);

    if (d == h)
    console.log("Sie sing gleich");
    
}



// c)

let p: number = 1;
let ergebnis: number = 0;

while (p <= 100) {

    ergebnis += p;
    p++;

    

}
console.log(ergebnis);


// d)

for (let e: number = 0; e < 10; e++) {
let minimum: number = 1;
let maximum: number = 100;
minimum = Math.ceil(minimum);
maximum = Math.floor(maximum);

let random: number = Math.floor(Math.random()) * (maximum - minimum) + minimum; 
console.log(random);


}



// e)

let faktor: number = factorial(8);

function factorial (_n: number): number {

let fakto: number = 1;
for (let o: number = 1; o < _n; o++) {
fakto = fakto * o;
}
return fakto;
}
console.log(faktor);


// f)

leapyears();

function leapyears(): void {

    let datum: Date = new Date();
    let aktuell: number = datum.getFullYear();


    for (let d: number = 1900; d <= aktuell; d++) {
        if ((d % 4) == 0 && (d % 100) != 0) {

            console.log(d);

        } else if ((d % 400) == 0) {
        console.log(d);
        }
    }
}




// Aufgabe 6:

// a)

let zeichen: string = "";
for (let v: number = 0; v <= 6; v++ ) {

zeichen += "#";

console.log(zeichen);


}



