
let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearEntry() {
    count = 0; 
    countEl.textContent = count;
}

function clearEntries() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = " ";
}
