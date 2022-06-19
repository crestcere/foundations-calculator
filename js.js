function operate() {
    
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
// add();
// subtract();
// multiply();
// divide();

let display = tempElement("display", document.body, "div");

// let display = document.createElement("div");
// display.classList.add("display");
// document.body.appendChild(display);

function display_value() {
    display.textContent = arguments[0];
}

display_value("0");

let container_1 = tempElement("container_1", document.body, "div")
// let container_1 = document.createElement("div");
// display.classList.add("container_1");
// document.body.appendChild(container_1);
// container_1.textContent = "aaa";



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
        /* (y < 3) ? (b_column.textContent = k) : (b_column.classList.toggle("b_operator"), b_column.classList.toggle("b_column"), 
            ((x == 0) ? (b_column.textContent = "+") : (x == 1) ? (b_column.textContent = "-") : 
            (x == 2) ? (b_column.textContent = "/") : (b_column.textContent = "*")));
          */
        // b_column.textContent = "+"
    }
}

{
    let b_row = document.createElement("div");
    b_row.setAttribute("class", "b_row");
    b_row.setAttribute("id", "b_row#3");
    container_1.appendChild(b_row);
}

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

{
    for (let i = 0; i < 4; i++) {
        let functions = document.createElement("button");
        functions.setAttribute("class", "functions");
        functions.setAttribute("id", "functions#" + i);
        let aa = ["+", "-", "/", "*"];
        functions.textContent = aa[i];
        let aaa = document.getElementsByClassName("b_row");
        aaa[i].appendChild(functions);
    }
}





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

let value = {
    input1 : []
};

let val_index = 1;

let result = 0;


for (let i = 0; i < 10; i++) {
    let b_column;
    if (i == 9) {
        b_column = document.getElementsByClassName("zeros")[0];
    } else {
        b_column = document.getElementsByClassName("b_column")[i];
    }
    b_column.addEventListener("click", () => {
        // display_value(b_column.textContent);        
        // value.input1 = [];
        let a = "input" + val_index;
        value[a].push(b_column.textContent);
        display_value(value[a].join(""));
    })
}

let c_button = document.getElementById("zeros#1");
c_button.addEventListener("click", () => {
    value = {
        input1 : []
    };
    val_index = 1;
    display_value("0");
})

function value_create() {
    val_index++;
    let a = "input" + val_index;
    return value[a] = [];
}


let add = document.getElementsByClassName("functions")[0];
    add.addEventListener("click", () => {
    value_create();
    console.log("add clicked");
})
let subtract = document.getElementsByClassName("functions")[1];


// let a = document.createElement("button");
// a.classList.add("b_row");
// container_1.appendChild(a);

// let b_row = document.getElementsByClassName("b_row")[0];

// let zeros;
// tempElement(b_row, container_1, "div");

// let zeros = tempElement("zeros", container_1, "button", 3);
// document.getElementById("zeros#0").textContent = 0;
// document.getElementById("zeros#1").textContent = "C";
// document.getElementById("zeros#2").textContent = "="

// let functions = tempElement("functions", document.getElementById("b_row#0"), "button", 4);

// for (let i = 0; i < )

// let aasd = document.createElement("div");
// zeros.appendChild(aasd);

// console.log(zeros);

// for (let i = 0; i < 4; i++) {
//     tempElement("f_keys", "button", b_row[i], "f_keys");
//     let a = document.getElementsByClassName("f_keys");
//     console.log(a);
//     b_row.appendChild(a);
//     switch (i) {
//         case 0:
//             a.textContent = "+";
//             break;
//         default:
//             a.textContent = "UwU"    
//     }
// }
// tempElement("f_keys", "button", b_row[2], 1);



// b_row[4].textContent = "aa";
// b_row[4].appendChild(aa);

// console.table(b_row);
