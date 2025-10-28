// User Inputs
let productName = window.prompt("Enter your product name:");
let productPrice = Number(window.prompt("Enter your product price:"));
let productQuantity = Number(window.prompt("Enter your product quantity:"));
let promoCode = window.prompt(
  "Enter a promo code (if you don't have, leave empty):"
);

// Input Validation
if (!productName || productName.trim() === "") {
  alert("❌ Product name is required!");
}

if (
  isNaN(productPrice) ||
  isNaN(productQuantity) ||
  productPrice <= 0 ||
  productQuantity <= 0
) {
  alert("❌ Product price and quantity must be positive numbers!");
}

// Total Price Function
function totalPrice(price, quantity) {
  return price * quantity;
}

let total = totalPrice(productPrice, productQuantity);

// Discount Function (30%)
function discount(price, discountPerc = 30) {
  return price * (discountPerc / 100);
}

let discountTotal = discount(productPrice).toFixed(2);

// VAT/Tax Function (15%)
function tax(price, vat = 15) {
  return price * (vat / 100);
}

let vatTotal = tax(productPrice).toFixed(2);

// Promo Code Function
function promo(price, code) {
  code = code.trim().toUpperCase();
  if (code === "PROTIK25") return price * 0.25;
  if (code === "OFFER10") return price * 0.1;
  return 0;
}

let promoDisc = promo(productPrice, promoCode).toFixed(2);

// Final Price Calculation
let finalPrice =
  total -
  parseFloat(discountTotal) +
  parseFloat(vatTotal) -
  parseFloat(promoDisc);
finalPrice = finalPrice.toFixed(2);

// Invoice
const invoice = document.getElementById("invoice");
invoice.innerHTML = `
    <h2>🧾 Invoice</h2>
    <p><b>Product:</b> ${productName.toUpperCase()}</p>
    <p><b>Price:</b> ${productPrice} TK</p>
    <p><b>Quantity:</b> ${productQuantity}</p>
    <p><b>Subtotal:</b> ${total} TK</p>
    <p><b>Discount (30%):</b> -${discountTotal} TK</p>
    <p><b>VAT (15%):</b> +${vatTotal} TK</p>
    <p><b>Promo Discount:</b> -${promoDisc} TK</p>
    <hr>
    <h3>✅ Final Amount: ${finalPrice} TK</h3>
    <p>Thank you for shopping with us ❤️</p>
  `;
