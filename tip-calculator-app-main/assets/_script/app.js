let bill_input = document.getElementById('bill_input');
let number_people_input = document.getElementById('number_people_input');
let button_calc = document.getElementsByClassName('button-calc');
let tip_amount = document.getElementById('tip_amount');
let total_amount = document.getElementById('total_amount');
let button_reset = document.getElementById('button_reset');
let tip_amount_result;
let tip_amount_rounded;
let tip_percent;

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
})

button_calc[0].addEventListener("click", function () {
    displayCalc(0.05);
});

button_calc[1].addEventListener("click", function () {
    displayCalc(0.10);
});

button_calc[2].addEventListener("click", function () {
    displayCalc(0.15);
});

button_calc[3].addEventListener("click", function () {
    displayCalc(0.25);
});

button_calc[4].addEventListener("click", function () {
    displayCalc(0.50);
});

button_reset.addEventListener("click", function () {
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    bill_input.value = '';
    number_people_input.value = '';
});