const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
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

// Withdraw Button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function updateSpanText(id, depositNumber) {
  const currentSpan = document.getElementById(id).innerText;
  const currentSpanNumber = parseFloat(currentSpan);
  const total = depositNumber + currentSpanNumber;
  document.getElementById(id).innerText = total;
}
