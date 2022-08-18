document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    const depositeTotalElement = document.getElementById('deposite-total');
    const preTotalDepositeString = depositeTotalElement.innerText;
    const preTotalDeposite = parseFloat(preTotalDepositeString);
    const currentTotal = preTotalDeposite + newDepositeAmount;
    depositeTotalElement.innerText = currentTotal;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balance = parseFloat(balanceTotalString);
    const currentTotalBalance = preTotalDeposite + balance;
    balanceTotal.innerText = currentTotalBalance;

    depositeField.value = '';
})