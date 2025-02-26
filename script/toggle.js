document.getElementById('cash_out').style.display = 'none';
document.getElementById('transfer_money').style.display = 'none';

document.getElementById('add_money_box').addEventListener('click', function () {
  document.getElementById('add_money').style.display = 'block';
  document.getElementById('cash_out').style.display = 'none';
  document.getElementById('transfer_money').style.display = 'none';
});
document.getElementById('cash_out_box').addEventListener('click', function () {
  document.getElementById('add_money').style.display = 'none';
  document.getElementById('cash_out').style.display = 'block';
  document.getElementById('transfer_money').style.display = 'none';
});
document
  .getElementById('transfer_money_box')
  .addEventListener('click', function () {
    document.getElementById('add_money').style.display = 'none';
    document.getElementById('cash_out').style.display = 'none';
    document.getElementById('transfer_money').style.display = 'block';
  });
