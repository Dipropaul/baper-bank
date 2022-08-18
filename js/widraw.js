document.getElementById('btn-widraw').addEventListener('click', function () {
    const widrawField = document.getElementById('widraw-field');
    const widrawFieldString = widrawField.value;
    const widrawAmount = parseFloat(widrawFieldString);
    const widrawTotalElement = document.getElementById('widraw-total');
    const preTotalWidrawString = widrawTotalElement.innerText;
    const preTotalWidraw = parseFloat(preTotalWidrawString);
    const currentWidrawTotal = preTotalWidraw + widrawAmount;
    widrawTotalElement.innerText = currentWidrawTotal;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balance = parseFloat(balanceTotalString);
    const currentTotalBalance = balance - currentWidrawTotal;
    balanceTotal.innerText = currentTotalBalance;

    widrawField.value = '';

})