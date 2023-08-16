// deposit section 

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input');
    const depositInputString = depositInputField.value; 
    const depositInput = parseFloat(depositInputString);
    depositInputField.value = ''; 

    

    const currentDepositField = document.getElementById('deposit-field');
    const currentDepositString = currentDepositField.innerText; 
    const currentDeposit = parseFloat(currentDepositString);

    const totalDeposit = depositInput + currentDeposit; 
    currentDepositField.innerText = totalDeposit; 

    const currentBalanceField = document.getElementById('balance-field');
    const currentBalanceString = currentBalanceField.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    

    let totalBalance = depositInput + currentBalance; 
    currentBalanceField.innerText = totalBalance; 
})

// withdrawal Section 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputField.value; 
    const withdrawInput = parseFloat(withdrawInputString);
    withdrawInputField.value = '';

    const currentWithdrawField = document.getElementById('withdraw-field');
    const currentWithdrawString = currentWithdrawField.innerText; 
    const currentWithdraw = parseFloat(currentWithdrawString);

  

    const currentBalanceField = document.getElementById('balance-field');
    const currentBalanceString = currentBalanceField.innerText;
    const currentBalance = parseFloat(currentBalanceString);

    if(withdrawInput > currentBalance){
        alert('excess limit');
        return; 
    }
    const totalWithdraw = withdrawInput + currentWithdraw;
    currentWithdrawField.innerText = totalWithdraw; 
    
    const totalBalance = currentBalance - withdrawInput; 
    currentBalanceField.innerText = totalBalance; 
})