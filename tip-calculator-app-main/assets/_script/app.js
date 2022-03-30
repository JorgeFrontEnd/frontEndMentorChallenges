let bill_input = document.getElementById('bill_input');
let number_people_input = document.getElementById('number_people_input');
let tip_amount = document.getElementById('tip_amount');
let total_amount = document.getElementById('total_amount');
let button_reset = document.getElementById('button_reset');

bill_input.addEventListener("change", function(){
    let bill_input_value = document.getElementById('bill_input').value;
    console.log("Bill = ",bill_input_value);
    if(bill_input_value > 0){

        console.log("1 input")
        
    }
});

number_people_input.addEventListener("change", function(){
    let number_people_input_value = document.getElementById('number_people_input').value;
    console.log("People = ",number_people_input_value);
    if(number_people_input_value > 0){

        console.log("2 input")
    }
});

button_reset.addEventListener("click", function(){
    tip_amount.innerHTML = "0";
    total_amount.innerHTML = "0";
})



