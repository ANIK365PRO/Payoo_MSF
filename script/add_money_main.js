document
  .getElementById('add_money_btn')
  .addEventListener('click', function (event) {
    // console.log('add money button clicked');
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main_balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
      // console.log('money add kora jabe');
      const sum = convertedMainBalance + convertedAmount;
      document.getElementById('main_balance').innerText = sum;
    } else {
      alert('pin vul ache');
    }
  });
