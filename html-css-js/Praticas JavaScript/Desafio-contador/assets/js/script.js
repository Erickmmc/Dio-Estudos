var current_Number = document.getElementById('currentNumber');
let count = 0;

function increment() {
    count ++;
    current_Number.innerHTML = count;
}

function decrement() {
    count --;
    current_Number.innerHTML = count;
}