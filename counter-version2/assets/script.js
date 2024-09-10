const minusSymbol = document.getElementById ("minus");
minusSymbol.addEventListener("click", decrement);

const plusSymbol = document.getElementById ("plus");
plusSymbol.addEventListener("click", increment);

let result = 0;

function decrement() {
    if (result >= 1) {
        result = result - 1;
        document.getElementById ("currentNumber").innerHTML = result;
    }
}

function increment() {
    if (result <=9) {
        result = result + 1;
        document.getElementById ("currentNumber").innerHTML = result;
    }
}
