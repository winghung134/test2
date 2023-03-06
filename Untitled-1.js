const a = document.querySelectorAll(".box-1");
let turn = 0;
let arr = [];
let score = 0;





// [4, 5, 6],
// [7, 8, 9],
// [1, 4, 7],
// [2, 5, 8],
// [3, 6, 9],
// [1, 5, 9],
// [3, 5, 7]

function createbox() {
    let column = 10;
    let row = 10;
    let i = 0;
    let code = "";
    for (let x = 0; x < column; x++) {
        code += `<div class = "column"> `
        for (let y = 0; y < row; y++) {
            code += `<div class = "row">`;
            i++;
            code += i
            code += `</div>`;
        }
        code += `</div>`;
    }
    //console.log("", code)
    let what = document.querySelector("g")
    what.innerHTML = code
}
createbox()
const b = document.querySelectorAll(".row")

for (let c of b) {
    c.addEventListener('click', (event) => { event.target.innerHTML = "new" })
        //console.log(c.innerHTML)

    c.innerHTML.reduce()
}

//start

function isDone(arr) {

    arr.sort((a, b) => { a - b })
        //longer array[array] == short array
        //[1,2,3,4].some( [1,2,3].every()) 
}

function placeObj() {
    turn++
    if (turn % 2 == 0) {
        arr.push(event.target.innerHTML);
        event.target.innerHTML = "X"
    } else {
        arr.push(event.target.innerHTML);
        event.target.innerHTML = "O"
    }
    if (arr.some(isDone)) { console.log('wanted') }
    //introduce step limitation
    for (let box of a) {
        box.innerHTML = ""
    }
}
//arr = [arr]
//wincon = arr[arr]
for (let box of a) {
    box.addEventListener("click", placeObj, { once: true })

}