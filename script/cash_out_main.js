document
  .getElementById('cashout_btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutNumber = document.getElementById(
      'cashout_account_number'
    ).value;

    const pin = document.getElementById('cashout_pin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout_amount').value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById('main_balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (cashOutNumber.length === 11) {
      if (convertedPin === 1234) {
        if (convertedAmount <= convertedMainBalance) {
          const newBalance = convertedMainBalance - convertedAmount;
          document.getElementById('main_balance').innerText = newBalance;

          const addHistory = document.getElementById('transaction_container');

          const p = document.createElement('p');
          p.innerText = `CashOut tk ${convertedAmount} from account number ${cashOutNumber}`;

          addHistory.appendChild(p);

          alert('CashOut successful, new balance is ' + newBalance);
        } else {
          alert('Insufficient balance, please enter a valid amount');
        }
      } else {
        alert('Enter valid pin');
      }
    } else {
      alert('Enter valid account number');
    }
  });
