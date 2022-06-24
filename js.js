function operate() {
    switch (arguments[0]) {
        case "+":
            result += +value["input" + (val_index - 1)].join("") + +value["input" + val_index].join("");
            break;
        case "-":
            result -= +value["input" + (val_index - 1)].join("") - +value["input" + val_index].join("");
            // result += +value["input" + val_index].join("") - +value["input" + (val_index - 1)].join("");
        default:
            break;
    }
    // console.log(Object.keys(value).length);
    // console.log("result: " + result);
    console.table(value);
}
const functions = {
    add() {
        return arguments[0] + arguments[1];
    },
    subtract() {
        return arguments[0] - arguments[1];
    },
    multiply() {
        return arguments[0] * arguments[1];
    },
    divide() {
        return arguments[0] / arguments[1];
    }
}

// Display container create
let display = tempElement("display", document.body, "div");
function display_value() {
    display.textContent = arguments[0];
}
display_value("0");

let container_1 = tempElement("container_1", document.body, "div")

// Number button and row div create
for (let x = 0; x < 3; x++) {
    let b_row = document.createElement("div");
    b_row.classList.add("b_row");
    b_row.setAttribute("id", "b_row" + "#" + x);
    container_1.appendChild(b_row);
    for (let y = 0; y < 3; y++) {
        let b_column = document.createElement("button");
        b_column.classList.add("b_column");
        b_row.appendChild(b_column);
        let k;
        (x == 2) ? (k = y + 1) : (x == 1 ) ? (k = 4 + y) : (x == 0) ? (k = 7 + y) : (1);
        b_column.textContent = k;
        b_column.setAttribute("id", "b_column" + "#" + k);
    }
}
{
    let b_row = document.createElement("div");
    b_row.setAttribute("class", "b_row");
    b_row.setAttribute("id", "b_row#3");
    container_1.appendChild(b_row);
}

// Zero, clear and operate button create
{
    for (let i = 0; i < 3; i++) {
        let functions = document.createElement("button");
        functions.setAttribute("class", "zeros");
        functions.setAttribute("id", "zeros#" + i);
        let aa = ["0", "C", "="];
        functions.textContent = aa[i];
        let aaa = document.getElementsByClassName("b_row");
        aaa[3].appendChild(functions);
    }
}

// Function buttons create and assign text values
{
    for (let i = 0; i < 4; i++) {
        let functions = document.createElement("button");
        functions.setAttribute("class", "functions");
        functions.setAttribute("id", "functions#" + (i + 1));
        let aa = ["+", "-", "/", "*"];
        functions.textContent = aa[i];
        let aaa = document.getElementsByClassName("b_row");
        aaa[i].appendChild(functions);
    }
}

// Tempelement
function tempElement(classname, mounts, type, many) {
    let classnames = classname;
    (typeof many == "undefined") ? (many = 1) : (many);
    for (let i = 0; i < many; i++) {
        classname = document.createElement(type);
        classname.setAttribute("id", classnames + "#" + i);
        classname.setAttribute("class", classnames);
        mounts.appendChild(classname);
    }
    return classname;
}

// Values and operators
let value = {
    input1 : []
};

let operator = {};

let val_index = 1;

let operator_index = 1;

let result = 0;

// Numbers event listener
for (let i = 1; i < 10; i++) {
    let b_column = document.getElementById("b_column#" + i);
    b_column.addEventListener("click", () => {
        let a = "input" + val_index;
        // console.log("a: " + a);
        value[a].push(b_column.textContent);
        display_value(value[a].join(""));
    })
}

// Zero button event listener;
document.getElementById("zeros#0").addEventListener("click", () => {
    let a = "input" + val_index;
    value[a].push("0");
    display_value(value[a].join(""));
})

// Clear button event listener;
let c_button = document.getElementById("zeros#1");
c_button.addEventListener("click", () => {
    value = {
        input1 : []
    };
    val_index = 1;
    result = 0;
    display_value("0");
})

function value_create() {
    if (arguments[0] == "val") {
        // val_index++;
        let a = "input" + val_index;
        value[a] = [];
    }
    else if (arguments[0] == "op") {
        let b = "input_op" + operator_index;
        value[b] = [];
        value[b].push(arguments[1]);
        console.log("op index: " + operator_index);
        console.log("val index: " + val_index);
        operator_index++;
        val_index++;
    }
}

// Add operator event listener;
let add = document.getElementsByClassName("functions")[0];
    add.addEventListener("click", () => {
    // value_create("op", add.textContent);
    if (value["input" + val_index].length > 0) {
        value_create("op", "+");
        value_create("val");
        operate("+");
        display_value("0");
        console.table(value);
    }
})

// Subtract operator event listener;
let subtract = document.getElementsByClassName("functions")[1];
subtract.addEventListener("click", () => {
    value_create("op", "-");
    value_create("val");
    operate("+");
    display_value("0");
    console.table(value);
})

// Operate button event listener;
document.getElementById("zeros#2").addEventListener("click", () => {
    display_value(result);
})
