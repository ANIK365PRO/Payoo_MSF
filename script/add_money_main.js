document
  .getElementById('add_money_btn')
  .addEventListener('click', function (event) {
    // console.log('add money button clicked');
    event.preventDefault();

    const accountNumber = document.getElementById('Account_number').value;

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main_balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        // console.log('money add kora jabe');
        if (convertedAmount > 0) {
          const sum = convertedMainBalance + convertedAmount;
          document.getElementById('main_balance').innerText = sum;

          const addHistory = document.getElementById('transaction_container');

          const p = document.createElement('p');
          p.innerText = `Money Added tk ${convertedAmount} from account number ${accountNumber}`;

          addHistory.appendChild(p);

          alert('money added successfully, new balance is ' + sum);
        } else {
          alert('Enter valid amount');
        }
      } else {
        alert('Enter valid pin');
      }
    } else {
      alert('Enter valid account number');
    }
  });
