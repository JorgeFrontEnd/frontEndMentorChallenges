let bill_input = document.getElementById('bill_input');
let number_people_input = document.getElementById('number_people_input');
let button_calc = document.getElementsByClassName('button-calc');
let tip_amount = document.getElementById('tip_amount');
let total_amount = document.getElementById('total_amount');
let button_reset = document.getElementById('button_reset');

// tip amount = bill * tip

function tipCalculator() {


    let tip_amount_result = bill_input.value * 1;
    let tip_amount_rounded = tip_amount_result.toFixed(2);

    $("#tip_amount").text(tip_amount_rounded);
}

$("#bill_input").on("change keyup paste", function () {

    if (bill_input.value > 0) {

        tipCalculator();

    }
})

// for(var i = 0; i < button_calc.length ; i++){
//     button_calc[i].addEventListener("click", function(){    
//         if(button_calc[0]){
//             console.log(button_calc.value);
//         }
//     });
// }

// number_people_input.addEventListener("change", function(){
//     if(number_people_input.value > 0){

//         console.log("2 input")
//     }
// });

button_reset.addEventListener("click", function () {
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    bill_input.value = '';
    number_people_input.value = '';
});