document.getElementById('cash_out').style.display = 'none';
document.getElementById('transfer_money').style.display = 'none';
document.getElementById('transaction_history').style.display = 'none';

document.getElementById('add_money_box').addEventListener('click', function () {
  handleToggle('add_money', 'block');
  handleToggle('cash_out', 'none');
  handleToggle('transfer_money', 'none');
  handleToggle('transaction_history', 'none');
});
document.getElementById('cash_out_box').addEventListener('click', function () {
  handleToggle('add_money', 'none');
  handleToggle('cash_out', 'block');
  handleToggle('transfer_money', 'none');
  handleToggle('transaction_history', 'none');
});
document
  .getElementById('transaction_box')
  .addEventListener('click', function () {
    handleToggle('add_money', 'none');
    handleToggle('cash_out', 'none');
    handleToggle('transfer_money', 'none');
    handleToggle('transaction_history', 'block');
  });

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
