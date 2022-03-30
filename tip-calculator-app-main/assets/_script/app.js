let bill_input = document.getElementById('bill_input');
let number_people_input = document.getElementById('number_people_input');
let button_calc = document.getElementsByClassName('button-calc');
let tip_amount = document.getElementById('tip_amount');
let total_amount = document.getElementById('total_amount');
let button_reset = document.getElementById('button_reset');

bill_input.addEventListener("change", function(){
    let bill_input_value = document.getElementById('bill_input').value;
    if(bill_input_value > 0){

        console.log("1 input")
        
    }
});

for(var i = 0; i < button_calc.length ; i++){
    button_calc[i].addEventListener("click", function(){    
        if(button_calc[0]){
            console.log(button_calc.value);
        }
    });
}

number_people_input.addEventListener("change", function(){
    let number_people_input_value = document.getElementById('number_people_input').value;
    if(number_people_input_value > 0){

        console.log("2 input")
    }
});

button_reset.addEventListener("click", function(){
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    bill_input.value = '';
    number_people_input.value = '';
});

