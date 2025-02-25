// alert('hi i am login.js');

document
  .getElementById('login_btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('Account_number').value;

    const pin = document.getElementById('pin').value;
    // console.log(accountNumber, pin);
    // console.log(typeof pin);
    const convertedPin = parseInt(pin);

    if (accountNumber.length === 11) {
      // console.log('Account number is correct');
      if (convertedPin === 1234) {
        // console.log('pin is correct');
        window.location.href = './main.html';
      } else {
        alert('Pin is wrong');
      }
    } else {
      alert('needed valid account number');
    }
  });
