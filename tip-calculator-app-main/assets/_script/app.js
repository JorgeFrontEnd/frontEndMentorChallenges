let bill_input = document.getElementById('bill_input');
let number_people_input = document.getElementById('number_people_input');
let button_calc = document.getElementsByClassName('button-calc');
let custom_amount = document.getElementById('custom_amount');
let tip_amount = document.getElementById('tip_amount');
let total_amount = document.getElementById('total_amount');
let button_reset = document.getElementById('button_reset');
let tip_amount_result;
let tip_amount_rounded;
let tip_percent;
let number_people = 0;

// tip amount = bill * tip %

function displayCalc(tip_percent) {

    tip_amount_result = bill_input.value * tip_percent;
    tip_amount_rounded = tip_amount_result.toFixed(2);

    $("#tip_amount").text(tip_amount_rounded);
}

$("#bill_input").on("change keyup paste", function () {

    if (bill_input.value > 0) {
        displayCalc(1);
    }
});

$("#number_people_input").on("change keyup paste", function () {
    if (bill_input.value > 0) {
        displayCalc(1);
    } else {
        console.log("Cant be Zero");
    }
});

button_calc[0].addEventListener("click", function () {
    let button_value_compressed = button_calc[0].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[1].addEventListener("click", function () {
    let button_value_compressed = button_calc[1].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[2].addEventListener("click", function () {
    let button_value_compressed = button_calc[2].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[3].addEventListener("click", function () {
    let button_value_compressed = button_calc[3].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[4].addEventListener("click", function () {
    let button_value_compressed = button_calc[4].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

$("#custom_amount").on("change keyup paste", function () {
    let custom_amount_value = custom_amount.value / 100;
    if (bill_input.value > 0) {
        displayCalc(custom_amount_value);
    }
});

button_reset.addEventListener("click", function () {
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    bill_input.value = '';
    number_people_input.value = '';
});