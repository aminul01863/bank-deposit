document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    // console.log('depositValue', depositValue);
    // 
    const depositBalance = document.getElementById('deposit-balance');
    const carentDepositTotal = depositBalance.innerText;

    const totalBalance = parseFloat(carentDepositTotal) + parseFloat(depositValue)
    console.log('total', totalBalance);

    depositBalance.innerText = totalBalance;


    const mainBalance = document.getElementById('main-balance');
    const maindeposit = parseFloat(mainBalance.innerText)
    const maindepositTotal = maindeposit + parseFloat(depositValue);
    mainBalance.innerText = maindepositTotal;
    depositInput.value = ''

});
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdraw = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdraw.value);
    console.log(withdrawInput)

    const withdrawBalance = document.getElementById('Widthdrw-balance');
    const widthdrawText = parseFloat(withdrawBalance.innerText)

    const totalWidthdraw = widthdrawText + withdrawInput
    withdrawBalance.innerText = totalWidthdraw

    const mainBalance = document.getElementById('main-balance');
    const maindeposit = parseFloat(mainBalance.innerText)
    const totalMainBalance = maindeposit - withdrawInput;
    mainBalance.innerText = totalMainBalance

    withdraw.value = ''
})