let productName = window.prompt("Enter your product name :");
let productPrice = Number(window.prompt("Enter your product price :"));
let productQuantity = Number(window.prompt("Enter your product quantity :"));

function totalPrice(price, quantity) {
  if (!isNaN(productName)) {
    return alert("Enter product name");
  }
  if (isNaN(productPrice) || isNaN(productQuantity)) {
    return alert("Product price and quantity should be a number");
  }

  return price * quantity;
}

let total = totalPrice(productPrice, productQuantity);
if(total) console.log(`Your total price is ${total}`)
