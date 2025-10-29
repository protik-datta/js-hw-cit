// car list and welcome function :

function startCarRental() {
  let perDayAmount = 0;
  let days = 0;
  let insuranceCost = 0;
  let fuelPayment = 0;
  let total = 0;
  let discount = 0;
  let subcharge = 0;

  alert("🚗 Welcome to Car Rental Service");

  // show cars :

  function showCar() {
    alert(
      "Available Cars:\n1. Toyota - 3000৳/day\n2. Honda - 2800৳/day\n3. BMW - 8000৳/day\n4. Tesla - 10000৳/day\n5. Mercedez - 8000৳/day\n6. Volvo - 5000৳/day\n7. Axio - 2500৳/day"
    );
  }
  showCar();

  // select car :

  function selectCar() {
    while (true) {
      let car = window.prompt("Select your car from the list :");

      if (!car) continue;

      if (car.toLowerCase() === "toyota") {
        return 3000;
      } else if (car.toLowerCase() === "honda") {
        return 2800;
      } else if (car.toLowerCase() === "bmw") {
        return 8000;
      } else if (car.toLowerCase() === "tesla") {
        return 10000;
      } else if (car.toLowerCase() === "mercedez") {
        return 8000;
      } else if (car.toLowerCase() === "volvo") {
        return 5000;
      } else if (car.toLowerCase() === "axio") {
        return 2500;
      } else {
        alert("Car not found ‼️");
      }
    }
  }

  perDayAmount = selectCar();

  // days function :

  function getDays() {
    while (true) {
      days = Number(window.prompt("How many days do you want to rent?"));
      if (!isNaN(days) && days > 0) {
        return days;
      } else {
        alert("❌ Please enter a valid number of days!");
      }
    }
  }

  days = getDays();

  // insurance :

  function insurance(days) {
    while (true) {
      let insurance = window.prompt("Do you want any insurance? yes/no");

      if (!insurance) continue;

      if (insurance.toLowerCase() === "yes") {
        return 500 * days;
      } else if (insurance.toLowerCase() === "no") {
        return 0;
      } else {
        alert("Please enter yes or no!");
      }
    }
  }

  insuranceCost = insurance(days);

  // fuel cost :

  function fuelCost(days) {
    return 500 * days;
  }

  fuelPayment = fuelCost(days);

  // total :

  function calcTotal(rent, insurance, days, fuel) {
    return rent * days + insurance + fuel;
  }

  total = calcTotal(perDayAmount, insuranceCost, days, fuelPayment);

  // weekend special :

  function weekend(perDayAmount) {
    while (true) {
      let weekday = window.prompt("On which day you want to rent our car ??");

      if (
        weekday.toLowerCase() === "saturday" ||
        weekday.toLowerCase() === "sunday"
      ) {
        return (perDayAmount * days) * 0.1;
      } else if (
        weekday.toLowerCase() === "monday" ||
        weekday.toLowerCase() === "tuesday" ||
        weekday.toLowerCase() === "wednesday" ||
        weekday.toLowerCase() === "thursday" ||
        weekday.toLowerCase() === "friday"
      ) {
        return 0;
      } else {
        alert("Enter valid day name ‼️");
        continue;
      }
    }
  }

  subcharge = weekend(perDayAmount);

  // discount :

  function calcDiscount(totalAmount) {
    if (days >= 5) {
      return totalAmount * 0.05;
    } else {
      return 0;
    }
  }

  discount = calcDiscount(total);

  // invoice :

  function invoice(total, discount, weekend) {
    let finalTotal = total - discount + weekend;

    alert(`
    ==============  Car Rental Invoice  =============

    Rent per Day      :  ${perDayAmount} ৳
    Total Days        :  ${days}
    Insurance         :  ${insuranceCost} ৳
    Fuel Charge       :  ${fuelPayment} ৳
    Weekend Subcharge :  ${subcharge} ৳
    Discount(5%)      :  ${discount} ৳
    -----------------------------
    Total Payable     :  ${finalTotal} ৳
    -----------------------------
    Thank you for renting with us
        `);
  }

  invoice(total, discount, subcharge);
}

startCarRental();
