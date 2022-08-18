// common classes

// get value from input field
function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldstring = inputField.value;
    const inputFieldValue = parseFloat(inputFieldstring);
    inputField.value = '';
    return inputFieldValue;
}

// get text element
function getTextValueById(textId){
    const previousTextValue = document.getElementById(textId);
    const previousTextValueString = previousTextValue.innerText;
    const previousText = parseFloat(previousTextValueString);
    return previousText;
}

// set text field with new value
function setTextElementValueById(textId, newValue){
    const textElement = document.getElementById(textId);
    textElement.innerText = newValue;
}

// Deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    // taking value from deposit field
    const newDeposit = getInputValueById('deposit-field');

    // checking deposit is a valid number
    if(isNaN(newDeposit)){
        alert('Please Enter a Valid Amount');
        return;
    }

    // taking previous deposit
    const previousDeposit = getTextValueById('deposit-total');

    // adding total deposit amount
    const totalDepositAmount = previousDeposit + newDeposit;

    //set new deposit
    setTextElementValueById('deposit-total', totalDepositAmount);

    // get ballance
    const currentBallance = getTextValueById('ballance-total');
    const totalBallance = currentBallance + totalDepositAmount;

    // set ballance
    setTextElementValueById('ballance-total', totalBallance);

    console.log(newDeposit,previousDeposit, totalDepositAmount, currentBallance,totalBallance);
});

// Withdraw
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get value from withdraw field
    const withdraw = getInputValueById('withdraw-field');

    // checking withdraw is a valid number
    if(isNaN(withdraw)){
        alert('Please Enter a Valid Amount');
        return;
    }

    // get previous ballance
    const previousBallance = getTextValueById('ballance-total');

    //checking ballance is grater than withdraw
    if(withdraw > previousBallance){
        alert('You Do Not have Sufficient Ballance');
        return;
    }

    // set withdraw amount in the text field
    setTextElementValueById('withdraw-total', withdraw);

    // calculating remain ballance
    const newBallance = previousBallance - withdraw;
    
    // set ballance
    setTextElementValueById('ballance-total', newBallance);
});