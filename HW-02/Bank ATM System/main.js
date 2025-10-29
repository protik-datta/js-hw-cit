const invoice = document.getElementById("invoice");

let PIN = Number(window.prompt("Enter your ATM PIN :"));
let balanceCheck = window.prompt(
  "Do you want to check your balance? write yes or no"
);
let deposit = Number(window.prompt("Enter your deposit balance :"));
let withdraw = Number(window.prompt("Enter your withdrawal amount :"));

let balance = 5000;



// check authentication function :

function authentication() {
  let correctPIN = 123456;

  if (isNaN(PIN)) {
    alert("❌ Please enter a valid PIN number!");
    return false;
  } else if (PIN !== correctPIN) {
    alert("🚫 Wrong PIN, Access Denied!");
    return false;
  } else {
    alert("✅ Login Successful!");
    return true;
  }
}



// balanceCheck function :

function checkBalance(check) {
  if (check && check.toLowerCase() === "yes") {
    return balance;
  } else {
    return 0;
  }
}



// deposit function :

function depositMoney(amount) {
  if (isNaN(amount) || amount <= 0) {
    alert("❌ Invalid deposit amount");
  } else {
    balance += amount;
    return amount;
  }
}



// withdrawal function :

function withdrawMoney(amount) {
  if (isNaN(amount) || amount < 0) {
    alert("❌ Invalid withdrawal amount");
  } else if (amount > balance) {
    alert("🚫 Insufficient balance");
  } else {
    balance -= amount;
    return amount;
  }
}



// start ATM function :

function startATM() {
  if (authentication()) {
    let checkedBalance = checkBalance(balanceCheck);
    let deposited = depositMoney(deposit);
    let withdrawn = withdrawMoney(withdraw);
    let finalAmount = balance;

    invoice.innerHTML = `
          <h2>🏦 ATM Transaction Invoice</h2>
          ${
            checkedBalance
              ? `<p> Current Balance: ${checkedBalance} TK</p>`
              : ""
          }
          <p> Deposit Amount: ${deposited} TK</p>
          <p> Withdraw Amount: ${withdrawn} TK</p>
          <hr>
          <p><b> Final Balance: ${finalAmount} TK</b></p>
          <p> Thank you for using our ATM!</p>
        `;
  }
}

startATM();
