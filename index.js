// Taking the values from the form

const billAmountInput = document.querySelector("#input-bill-amt");
const totalPersonsInput = document.querySelector("#input-no-of-people");
const customTipPercentageInput = document.querySelector("#input-tip");

//Tip Percentage Button
const tipBtn = document.querySelectorAll(".tip-btn")

// Output
let tipAmt = document.querySelector("#tip-amt")
let totalAmt = document.querySelector("#total-amt")

//Error Message
const errorMessage = document.querySelector("#error-message")

//Reset Button
const resetBtn = document.querySelector("#reset-btn")

//For Code
let tipPercentage
let tipAmount = 0
let total = 0



tipBtn.forEach(button =>{
    button.addEventListener('click',function(event){
        event.preventDefault();
        tipPercentage = parseFloat(button.value);
        startCalc(tipPercentage);        
    })
})

customTipPercentageInput.addEventListener('input',function(event){
        event.preventDefault();
        const customTipPercentage = customTipPercentageInput.value
        if(customTipPercentage > 0){
            startCalc(customTipPercentage);
        }
         
})

function startCalc(tipPercentage){
    let tip = tipPercentage;
    const billAmount = parseFloat(billAmountInput.value)
    const totalPersons = parseFloat(totalPersonsInput.value)
    if(billAmount>0 && totalPersons>0){
        let perPerson = billAmount/totalPersons
        tipAmount = calcTipAmount(tip,perPerson)
        total = calcTotal(tipAmount,perPerson)
        display(tipAmount,total)
    } 
    else if (totalPersons === 0){
        errorMessage.style.display = 'block'

        document.querySelector("#input-no-of-people").style.border = "1px solid rgb(255, 101, 101)"
    }
    else{
        document.querySelector("#input-no-of-people").style.border = "none"
    }
}

function calcTipAmount(tipPercentage,perPerson){
   return (tipPercentage*perPerson)/(100)
}

function calcTotal(tipAmount,perPerson){
    return (perPerson+tipAmount)
}

function display(tipAmount,total){
    tipAmt.textContent = `$${tipAmount.toFixed(2)}`
    totalAmt.textContent = `$${total.toFixed(2)}`
    
}

//------------------------------------

resetBtn.addEventListener('click',function(){
    tipAmt.textContent = '$0.00'
    totalAmt.textContent = '$0.00'
    billAmountInput.value = '';
    customTipPercentageInput.value = '';
    totalPersonsInput.value = '';
    
    errorMessage.style.display = 'none';
    document.querySelector("#input-no-of-people").style.border = "none"
})