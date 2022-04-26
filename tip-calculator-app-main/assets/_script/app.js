let bill_input = document.getElementById('bill_input'),
    number_people_input = document.getElementById('number_people_input'),
    button_calc = document.getElementsByClassName('button-calc'),
    custom_amount = document.getElementById('custom_amount'),
    tip_amount = document.getElementById('tip_amount'),
    total_amount = document.getElementById('total_amount'),
    button_reset = document.getElementById('button_reset'),
    button_value_compressed,
    custom_amount_value,
    tip_amount_result,
    tip_amount_rounded,
    tip_percent = 0,
    lastClickedElement,
    number_people = 1;

function displayCalc(tip_percent, number_people) {

    tip_amount_result = bill_input.value * tip_percent / number_people;
    total_amount_result = parseFloat(bill_input.value / number_people) + parseFloat(tip_amount_result);
    tip_amount_rounded = tip_amount_result.toFixed(2);
    total_amount_rounded = total_amount_result.toFixed(2);
    let length = $("#bill_input").val().length;
        
    if(length >= 8){
        let potency = expo(total_amount_rounded,2);
        $("#tip_amount").text(potency);
        $("#total_amount").text(potency);
    }
    else {
        $("#tip_amount").text(tip_amount_rounded);
        $("#total_amount").text(total_amount_rounded);
    }
}

function getLastClicked(e) {
    e = e || window.event;
    $.lastClicked = e.target || e.srcElement;

    lastClickedElement = $.lastClicked;
}

function compressButton() {
    button_value_compressed = lastClickedElement.value.replace(/[^\d.-]/g, '');
    button_value_compressed = button_value_compressed / 100;
    tip_percent = button_value_compressed;
}

function expo(x, y) {
    return Number.parseFloat(x).toExponential(y);
}

function customValue() {
    $("#custom_amount").on("click change keyup paste", function () {

        custom_amount_value = custom_amount.value / 100;
        if (bill_input.value == 0) {
            tip_amount.innerHTML = "0.00";
            total_amount.innerHTML = "0.00";
        } else {
            displayCalc(custom_amount_value, number_people);
            tip_percent = custom_amount_value;
        }
    });
}

customValue();

$("#bill_input").on("click change keyup paste", function () {
    
    if (button_value_compressed != undefined && lastClickedElement.classList.contains('button-calc')) {
        displayCalc(button_value_compressed, number_people);
    } else if (custom_amount_value != undefined) {
        displayCalc(custom_amount_value, number_people);
    } 
    else if (bill_input.value == 0) {
        tip_amount.innerHTML = "0.00";
        total_amount.innerHTML = "0.00";
    } else {
        displayCalc(0, number_people);
    }
});

$('#grid').click(function () {
    getLastClicked();
    switch (lastClickedElement.value) {
        case "5%":
            button_calc[0].classList.add('active');
            button_calc[1].classList.remove('active');
            button_calc[2].classList.remove('active');
            button_calc[3].classList.remove('active');
            button_calc[4].classList.remove('active');
            compressButton();
            displayCalc(button_value_compressed, number_people);
            break;
        case "10%":
            button_calc[1].classList.add('active');
            button_calc[0].classList.remove('active');
            button_calc[2].classList.remove('active');
            button_calc[3].classList.remove('active');
            button_calc[4].classList.remove('active');
            compressButton();
            displayCalc(button_value_compressed, number_people);
            break;
        case "15%":
            button_calc[2].classList.add('active');
            button_calc[0].classList.remove('active');
            button_calc[1].classList.remove('active');
            button_calc[3].classList.remove('active');
            button_calc[4].classList.remove('active');
            compressButton();
            displayCalc(button_value_compressed, number_people);
            break;
        case "25%":
            button_calc[3].classList.add('active');
            button_calc[0].classList.remove('active');
            button_calc[1].classList.remove('active');
            button_calc[2].classList.remove('active');
            button_calc[4].classList.remove('active');
            compressButton();
            displayCalc(button_value_compressed, number_people);
            break;
        case "50%":
            button_calc[4].classList.add('active');
            button_calc[0].classList.remove('active');
            button_calc[1].classList.remove('active');
            button_calc[2].classList.remove('active');
            button_calc[3].classList.remove('active');
            compressButton();
            displayCalc(button_value_compressed, number_people);
            break;
        default:
            button_calc[0].classList.remove('active');
            button_calc[1].classList.remove('active');
            button_calc[2].classList.remove('active');
            button_calc[3].classList.remove('active');
            button_calc[4].classList.remove('active');
            customValue();
            break;
    }
});

$("#number_people_input").on("click change keyup paste", function () {
    if (number_people_input.value > 0) {
        number_people = number_people_input.value;
        displayCalc(tip_percent, number_people)
    }
});

button_reset.addEventListener("click", function () {
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    custom_amount.value = '';
    button_value_compressed = '';
    bill_input.value = '';
    number_people_input.value = '';
});