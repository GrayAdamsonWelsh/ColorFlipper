let arrCol = ["red", "yellow", "blue"];

let intColSize = arrCol.length;
let intCol= 0;

let x = document.getElementById("bdy");

function btnPressed() {
    x.style.backgroundColor = arrCol[intCol];
    intCol++;
    if (intCol > intColSize){
        intCol = 0;
    }
}
x.addEventListener('click', btnPressed);