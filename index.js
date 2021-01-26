const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "";
});

// Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  updateSpanText("currentDeposit", depositNumber);

  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

function updateSpanText(id, depositNumber) {
  const currentSpan = document.getElementById(id).innerText;
  const currentSpanNumber = parseFloat(currentSpan);
  const total = depositNumber + currentSpanNumber;
  document.getElementById(id).innerText = total;
}
