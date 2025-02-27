// when get input value by id:
function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// when get element innerText by id:
function getInnerTextById(id) {
  const Value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(textValue);
  return convertedValue;
}

// when we set element innerText by id:
function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}
