let expression = "";

function fillInput(value) {
    let input = document.getElementById("input1");

    if (value === 'DEL') {
        input.value = input.value.slice(0, -1);
        expression = expression.slice(0, -1); // update internal expression too
    } else if (value === 'CLR') {
        input.value = "";
        expression = "";
    } else if (value === '=') {
        calculate();
    } else {
        input.value += value;
        expression += value;
    }
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById("input1").value = result;
        expression = result.toString(); // allow chaining
    } catch {
        document.getElementById("input1").value = "Error";
        expression = "";
    }
}
