const minusSymbol = document.getElementById ("minus");
minusSymbol.addEventListener("click", decrement);

const plusSymbol = document.getElementById ("plus");
plusSymbol.addEventListener("click", increment);

let result = 0;
let number = document.getElementById ("currentNumber")

function decrement() {
        result = result - 1;
        if (result < 0) {
            number.classList.remove('positive');
            number.classList.add('negative');
            document.getElementById ("currentNumber").innerHTML = result;
        }
        else {
            document.getElementById ("currentNumber").innerHTML = result;
        }
}

function increment() {
        result = result + 1;
        if (result >= 0) {
            number.classList.remove('negative');
            number.classList.add('positive');
            document.getElementById ("currentNumber").innerHTML = result;
        }
        else {
            document.getElementById ("currentNumber").innerHTML = result;
        }
}
