// let total = sum(2, 3);
// displayDOM(total)

// function sum(x, y){
//     let result = x + y;
//     return result
// }

sum1(45, 15, displayConsole);

function sum1(r, t, myCallBack) {
    let sumResult = r + t;
    return myCallBack(sumResult)
}

function displayConsole(output) {
    console.log(output)
}

function displayDOM(output) {
    document.getElementById("display").innerHTML = output;
}


//above is a code executing a calback function
//Next below, is a code executing the rest parameter

let a = 10
let b = a
let c = 9


console.log(sum(a, b, c, 100) + " is the total")

function sum(...addValue) {
    let total = 0;
    for (const value of addValue) {
        total += value
    }
    return total
} 