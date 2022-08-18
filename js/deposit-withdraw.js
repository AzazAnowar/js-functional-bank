/*
1. add enent listener to deposit button
2. get deposit amount from the deposit field
2-5. convert string to float
3. clear deposit inpunt field after getting the value
4.get the previous deposit amount
4-5. convert string to float
5. calculate total deposit and set the value
6.get the total ballance and add new deposit
 */

// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
    const newDepositElement = document.getElementById('deposit-field');
    const newDepositString = newDepositElement.value;
    const newDeposit = parseFloat(newDepositString);

    // step-3
    newDepositElement.value = '';

    // checling if amount is null
    if(isNaN(newDeposit)){
        alert("please Enter a valin Number");
        return;
    }

    // step-4
    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    // step-5
    const newDepositTotal = newDeposit + previousDeposit;
    previousDepositElement.innerText = newDepositTotal;

    // step-6
    const ballanceElement = document.getElementById('ballance-total');
    const ballanceString = ballanceElement.innerText;
    const ballance = parseFloat(ballanceString);

    const ballanceTotal = newDepositTotal + ballance;

    ballanceElement.innerText = ballanceTotal;
});

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2
    const withdrawAmountElement = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawAmountElement.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // step-3
    withdrawAmountElement.value = '';

    // checking the input field
    if(isNaN(withdrawAmount)){
        alert('Enter your Withdraw Amount');
    }

    //step-4
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // step-6
    const ballanceElement = document.getElementById('ballance-total');
    const ballanceString = ballanceElement.innerText;
    const ballance = parseFloat(ballanceString);
    
    //step-7
    if(withdrawAmount > ballance){
        alert('Bank a ato tk nai');
        return;
    }

    // step-5
    const withdrawTotal = previousWithdraw + withdrawAmount;
    previousWithdrawElement.innerText = withdrawTotal;

    const newBallance = ballance - withdrawAmount;
    ballanceElement.innerText = newBallance;
});