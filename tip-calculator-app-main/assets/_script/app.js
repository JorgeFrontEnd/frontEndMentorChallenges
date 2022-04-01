let bill_input = document.getElementById('bill_input'),
    number_people_input = document.getElementById('number_people_input'),
    button_calc = document.getElementsByClassName('button-calc'),
    custom_amount = document.getElementById('custom_amount'),
    tip_amount = document.getElementById('tip_amount'),
    total_amount = document.getElementById('total_amount'),
    button_reset = document.getElementById('button_reset'),
    input_value_compressed,
    button_value_compressed,
    custom_amount_value,
    tip_amount_result,
    tip_amount_rounded,
    tip_percent,
    number_people;

function displayCalc(tip_percent) {

    tip_amount_result = bill_input.value * tip_percent;
    total_amount_result = parseFloat(bill_input.value) + parseFloat(tip_amount_result);
    tip_amount_rounded = tip_amount_result.toFixed(2);
    total_amount_rounded = total_amount_result.toFixed(2);

    $("#tip_amount").text(tip_amount_rounded);
    $("#total_amount").text(total_amount_rounded);
}

$("#bill_input").on("click change keyup paste", function () {

    if (button_value_compressed != undefined) {
        displayCalc(button_value_compressed);
    } else if (custom_amount_value != undefined) {
        displayCalc(custom_amount_value);
    } else if (bill_input.value == 0) {
        tip_amount.innerHTML = "0.00";
        total_amount.innerHTML = "0.00";
    } else {
        displayCalc(0);
    }
});

button_calc[0].addEventListener("click", function () {
    button_value_compressed = button_calc[0].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[1].addEventListener("click", function () {
    button_value_compressed = button_calc[1].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[2].addEventListener("click", function () {
    button_value_compressed = button_calc[2].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[3].addEventListener("click", function () {
    button_value_compressed = button_calc[3].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

button_calc[4].addEventListener("click", function () {
    button_value_compressed = button_calc[4].value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    displayCalc(button_value_compressed);
});

$("#custom_amount").on("click change keyup paste", function () {
    custom_amount_value = custom_amount.value / 100;
    if (bill_input.value == 0) {
        tip_amount.innerHTML = "0.00";
        total_amount.innerHTML = "0.00";
    } else {
        displayCalc(custom_amount_value);
    }
});

// $("#number_people_input").on("change keyup paste", function () {
//     if (number_people_input.value > 0) {
//         number_people == number_people_input.value;
//     } else {
//         console.log("Cant be Zero");
//     }
// });

button_reset.addEventListener("click", function () {
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    custom_amount.value = '';
    button_value_compressed = '';
    bill_input.value = '';
    number_people_input.value = '';
});