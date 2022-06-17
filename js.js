/* function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}
 */

function operate() {
    add();
    subtract();
    multiply();
    divide();
}

let display = document.createElement("div");
display.classList.add("display");
display.textContent = "acc";
document.body.appendChild(display);

let container_1 = document.createElement("div");
display.classList.add("container_1");
document.body.appendChild(container_1);
// container_1.textContent = "aaa";

for (let x = 0; x < 4; x++) {
    let b_row = document.createElement("div");
    b_row.classList.add("b_row");
    container_1.appendChild(b_row);
    for (let y = 0; y < 4; y++) {
        let b_column = document.createElement("button");
        b_column.classList.add("b_column");
        b_row.appendChild(b_column);
        (y < 3) ? (b_column.textContent = y + 1) : ((x == 0) ? (b_column.textContent = "+") : (x == 1) ? (b_column.textContent = "-") : (x == 2) ? (b_column.textContent = "/") : (b_column.textContent = "*"));
        // b_column.textContent = "+"
    }
}

let b_row = document.getElementsByClassName("b_row");
let aa = document.createElement("button");
b_row[0].appendChild(aa);