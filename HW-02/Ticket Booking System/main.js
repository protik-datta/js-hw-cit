// user input :

let userChoice;
let seatChoice;
let ticketQuantity;
let ticketPrice = 0;
let total = 0;
let discount = 0;

// user authentication :

let userAuth = () => {
  const PIN = 12345;

  while (true) {
    let userPIN = Number(window.prompt("Enter your User PIN Number :"));

    if (isNaN(userPIN)) {
      alert("❌ Please enter a valid PIN number!");
      continue;
    } else if (userPIN !== PIN) {
      alert("🚫 Wrong PIN, Access Denied!");
      continue;
    } else {
      alert("✅ Login Successful!");
      return true;
    }
  }
};

userAuth();

// show catagory :

let chooseCategory = () => {
  alert(`    01. Movie Tickets
    02. Bus Tickets 
    03. Train Tickets 
    04. Concert Tickets
    05. Play Tickets
    06. Sports Event Tickets
    07. Flight Tickets
    08. Amusement Park Tickets
    09. Seminar Tickets
    10. Fair Tickets`);
};

let category = chooseCategory();

// show price :

let showPrice = () => {
  alert(`    01. Movie Tickets ---- 500 BDT
    02. Bus Tickets ---- 300 BDT
    03. Train Tickets ---- 400 BDT
    04. Concert Tickets ---- 1500 BDT
    05. Play Tickets ---- 800 BDT
    06. Sports Event Tickets ---- 1200 BDT
    07. Flight Tickets ---- 5000 BDT
    08. Amusement Park Tickets ---- 1000 BDT
    09. Seminar Tickets ---- 700 BDT
    10. Fair Tickets ---- 300 BDT`);
};

let price = showPrice();

// available seats :

let availableSeats = () => {
  alert(`    01. Movie Tickets -- seats available (A1, A2, A3, B1, B2)
    02. Bus Tickets -- seats available (1, 2, 3, 4, 5)
    03. Train Tickets -- seats available (10, 11, 12, 13, 14)
    04. Concert Tickets -- seats available (VIP1, VIP2, R1, R2)
    05. Play Tickets -- seats available (T1, T2, T3, T4)
    06. Sports Event Tickets -- seats available (S1, S2, S3, S4)
    07. Flight Tickets -- seats available (F1, F2, F3, F4)
    08. Amusement Park Tickets -- seats available (Entry1, Entry2, Entry3)
    09. Seminar Tickets -- seats available (W1, W2, W3, W4)
    10. Fair Tickets -- seats available (E1, E2, E3, E4, E5)`);
};

let seat = availableSeats();

// book ticket :

let ticketBook = () => {
  while (true) {
    userChoice = Number(
      window.prompt("Enter category number (1–10) to book your ticket :")
    );
    seatChoice = window.prompt(
      "Enter your preferred seat number (like A1, VIP1, T3, etc.):"
    );
    ticketQuantity = Number(
      window.prompt("How much ticket do you want to book :")
    );

    let categoryName;

    // ---------------------- conditions ------------------ //

    if (
      userChoice === 1 &&
      (seatChoice === "A1" ||
        seatChoice === "A2" ||
        seatChoice === "A3" ||
        seatChoice === "B1" ||
        seatChoice === "B2")
    ) {
      ticketPrice = 500;
      total = ticketPrice * ticketQuantity;
      categoryName = "Movie Tickets";
    } else if (
      userChoice === 2 &&
      (seatChoice === "1" ||
        seatChoice === "2" ||
        seatChoice === "3" ||
        seatChoice === "4" ||
        seatChoice === "5")
    ) {
      ticketPrice = 300;
      total = ticketPrice * ticketQuantity;
      categoryName = "Bus Tickets";
    } else if (
      userChoice === 3 &&
      (seatChoice === "10" ||
        seatChoice === "11" ||
        seatChoice === "12" ||
        seatChoice === "13" ||
        seatChoice === "14")
    ) {
      ticketPrice = 400;
      total = ticketPrice * ticketQuantity;
      categoryName = "Train Tickets";
    } else if (
      userChoice === 4 &&
      (seatChoice === "VIP1" ||
        seatChoice === "VIP2" ||
        seatChoice === "R1" ||
        seatChoice === "R2")
    ) {
      ticketPrice = 1500;
      total = ticketPrice * ticketQuantity;
      categoryName = "Concert Tickets";
    } else if (
      userChoice === 5 &&
      (seatChoice === "T1" ||
        seatChoice === "T2" ||
        seatChoice === "T3" ||
        seatChoice === "T4")
    ) {
      ticketPrice = 800;
      total = ticketPrice * ticketQuantity;
      categoryName = "Play Tickets";
    } else if (
      userChoice === 6 &&
      (seatChoice === "S1" ||
        seatChoice === "S2" ||
        seatChoice === "S3" ||
        seatChoice === "S4")
    ) {
      ticketPrice = 1200;
      total = ticketPrice * ticketQuantity;
      categoryName = "Sports Event Tickets";
    } else if (
      userChoice === 7 &&
      (seatChoice === "F1" ||
        seatChoice === "F2" ||
        seatChoice === "F3" ||
        seatChoice === "F4")
    ) {
      ticketPrice = 5000;
      total = ticketPrice * ticketQuantity;
      categoryName = "Flight Tickets";
    } else if (
      userChoice === 8 &&
      (seatChoice === "ENTRY1" ||
        seatChoice === "ENTRY2" ||
        seatChoice === "ENTRY3")
    ) {
      ticketPrice = 1000;
      total = ticketPrice * ticketQuantity;
      categoryName = "Amusement Park Tickets";
    } else if (
      userChoice === 9 &&
      (seatChoice === "W1" ||
        seatChoice === "W2" ||
        seatChoice === "W3" ||
        seatChoice === "W4")
    ) {
      ticketPrice = 700;
      total = ticketPrice * ticketQuantity;
      categoryName = "Seminar Tickets";
    } else if (
      userChoice === 10 &&
      (seatChoice === "E1" ||
        seatChoice === "E2" ||
        seatChoice === "E3" ||
        seatChoice === "E4" ||
        seatChoice === "E5")
    ) {
      ticketPrice = 300;
      total = ticketPrice * ticketQuantity;
      categoryName = "Fair Tickets";
    } else {
      alert("❌ Invalid category number or seat choice!");
      continue;
    }

    // ---------------------- conditions ------------------ //

    if (total >= 2000) {
      discount = total * 0.1;
      total -= discount;
      alert("🎉 You got a 10% discount!");
    }

    // invoice :

    alert(`
    ===============================
             Ticket Invoice       
    ===============================
     Category      : ${categoryName}
     Seat          : ${seatChoice}
     Quantity      : ${ticketQuantity}
     Price         : ${ticketPrice} BDT
     Discount      : ${discount} BDT
     Total Payable : ${total} BDT
    ===============================
        Booking Confirmed!
    Thank you for choosing us 💖
    ===============================
        `);

    return {
      bookedSeat: seatChoice,
      bookedCategory: categoryName,
      bookedQuantity: ticketQuantity,
      bookedTotal: total,
    };
  }
};

// ticket cancelation :

function cancelTicket(booked) {
  alert("Welcome to Ticket Cancellation Section");

  let wantToCancel = window.prompt(
    "Do you want to cancel your ticket? (yes/no)"
  );

  while (true) {
    if (wantToCancel.toLowerCase() === "no") {
      alert("Okay! Your ticket is still active.");
      break;
    } else if (wantToCancel.toLowerCase() === "yes") {
      let seatNumber = window.prompt(
        "Enter your booked seat number to cancel:"
      );

      if (seatNumber === booked.bookedSeat) {
        let refund = booked.bookedTotal * 0.8;

        // cancel invoice
        alert(`
        ===============================
            ❌ Ticket Cancellation ❌
        ===============================
        Category : ${booked.bookedCategory}
        Seat : ${booked.bookedSeat}
        Quantity : ${booked.bookedQuantity}
        Total Paid : ${booked.bookedTotal} BDT
        Refund Amount : ${refund} BDT
        ===============================
        Your ticket has been cancelled successfully!
        ===============================
                `);
        break;
      } else if (seatNumber === "" || seatNumber === null) {
        alert("❌ Please enter a valid seat number!");
        continue;
      } else {
        alert("🚫 No such seat found in your booking!");
        continue;
      }
    } else {
      alert("❌ Please type only 'yes' or 'no'!");
      wantToCancel = window.prompt(
        "Do you want to cancel your ticket? (yes/no)"
      );
      continue;
    }
  }
}

let bookedTicket = ticketBook();
cancelTicket(bookedTicket);
