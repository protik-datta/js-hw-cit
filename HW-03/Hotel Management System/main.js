// ========================== rooms ======================== //

const rooms = [
  {
    id: 1,
    type: "Single",
    price: 2000,
    available: 10,
    maxGuests: 1,
    amenities: ["WiFi", "TV", "AC"],
  },
  {
    id: 2,
    type: "Double",
    price: 3500,
    available: 8,
    maxGuests: 2,
    amenities: ["WiFi", "TV", "AC", "Mini Fridge"],
  },
  {
    id: 3,
    type: "Suite",
    price: 7000,
    available: 5,
    maxGuests: 4,
    amenities: ["WiFi", "TV", "AC", "Mini Fridge", "Balcony"],
  },
  {
    id: 4,
    type: "Family",
    price: 5000,
    available: 6,
    maxGuests: 3,
    amenities: ["WiFi", "TV", "AC", "Kitchenette"],
  },
  {
    id: 5,
    type: "Deluxe",
    price: 9000,
    available: 3,
    maxGuests: 2,
    amenities: ["WiFi", "TV", "AC", "Mini Fridge", "Sea View"],
  },
];

// ========================== guests ======================== //

const guests = [
  {
    id: 1,
    name: "Rahim Uddin",
    phone: "01711111111",
    email: "rahim@gmail.com",
    checkedIn: false,
    age: 30,
  },
  {
    id: 2,
    name: "Karim Ahmed",
    phone: "01722222222",
    email: "karim@gmail.com",
    checkedIn: true,
    age: 25,
  },
  {
    id: 3,
    name: "Salma Khatun",
    phone: "01733333333",
    email: "salma@gmail.com",
    checkedIn: false,
    age: 28,
  },
  {
    id: 4,
    name: "Nayeem Hossain",
    phone: "01744444444",
    email: "nayeem@gmail.com",
    checkedIn: false,
    age: 35,
  },
  {
    id: 5,
    name: "Farzana Yasmin",
    phone: "01755555555",
    email: "farzana@gmail.com",
    checkedIn: true,
    age: 27,
  },
];

// ========================== booking ======================== //

const bookings = [
  {
    bookingID: 101,
    guestID: 2,
    roomID: 2,
    nights: 3,
    guests: 2,
    totalPrice: 12112,
    paid: true,
    checkInDate: "2025-11-01",
    checkOutDate: "2025-11-04",
  },
  {
    bookingID: 102,
    guestID: 5,
    roomID: 1,
    nights: 2,
    guests: 1,
    totalPrice: 4600,
    paid: false,
    checkInDate: "2025-11-02",
    checkOutDate: "2025-11-04",
  },
  {
    bookingID: 103,
    guestID: 3,
    roomID: 4,
    nights: 4,
    guests: 3,
    totalPrice: 20000,
    paid: true,
    checkInDate: "2025-11-05",
    checkOutDate: "2025-11-09",
  },
];

// ====================== room showing ===================== //

const showRoom = () => {
  for (let room of rooms) {
    alert(`
        🏨 Room ID: ${room.id}
        Type: ${room.type}
        Price: ৳${room.price} per night
        Available: ${room.available}
        Max Guests: ${room.maxGuests}
        Amenities: ${room.amenities.join(", ")}
        ----------------------------------------------------
                `);
  }
};

showRoom();

// ========================= booking =========================== //

const booking = () => {
  let booking = true;
  const taxRate = 0.15;

  while (booking) {
    let guestName = window.prompt("📝 Enter Guest Full Name:");
    let guestPhone = window.prompt("📞 Enter Guest Phone Number:");
    let guestEmail = window.prompt("✉️ Enter Guest Email Address:");
    let guestAge = Number(window.prompt("👤 Enter Guest Age:"));

    let roomType = Number(
      window.prompt(
        "🏨 Choose Room Type:\n1️⃣ Single\n2️⃣ Double\n3️⃣ Suite\n4️⃣ Family\n5️⃣ Deluxe Enter your choice:"
      )
    );

    let numberOfNights = Number(
      window.prompt("🛏️ Enter Number of Nights You Wish to Stay:")
    );

    let numberOfGuests = Number(
      window.prompt("👥 Enter Number of Guests for the Room:")
    );

    const selectedRoom = rooms.find((p) => p.id === roomType);

    // Input Validation :

    if (!guestName || !isNaN(guestName)) {
      alert("❌ Guest name cannot be empty. Please enter your full name");
      continue;
    }

    if (!guestPhone) {
      alert(
        "❌ Phone number cannot be empty. Please enter your phone number.”"
      );
      continue;
    }

    if (isNaN(guestPhone) || guestPhone.length < 11) {
      alert("❌ Invalid phone number. Please enter only digits");
      continue;
    }

    if (!guestEmail) {
      alert("❌ Email cannot be empty. Please enter your email address.");
      continue;
    }

    if (!guestEmail.includes("@")) {
      alert(`❌ Invalid email. Make sure it contains '@' symbol.`);
      continue;
    }

    if (isNaN(guestAge) || guestAge < 18 || guestAge > 100) {
      alert("❌ Invalid age. Guest must be a number between 18 and 100.");
      continue;
    }

    if (isNaN(roomType) || ![1, 2, 3, 4, 5].includes(roomType)) {
      alert("Please submit only number which is shown to the display");
      continue;
    }

    if (isNaN(numberOfNights) || numberOfNights <= 0) {
      alert(
        "❌ Number of nights must be at least 1. Please enter a valid number of nights."
      );
      continue;
    }

    if (isNaN(numberOfGuests) || numberOfGuests <= 0) {
      alert("❌ Number of guests must be at least 1.");
      continue;
    }

    if (selectedRoom && numberOfGuests > selectedRoom.maxGuests) {
      alert(
        `❌ Too many guests for this room type. Maximum allowed guests: ${selectedRoom.maxGuests}. Please enter a valid number of guests.`
      );
      continue;
    }

    // price calculation

    let basePrice = selectedRoom.price * numberOfNights;

    let extraGuest = numberOfGuests - selectedRoom.maxGuests;

    if (extraGuest > 0) {
      basePrice += extraGuest * 500;
    }

    let taxAmount = basePrice * taxRate;

    let totalAmount = basePrice + taxAmount;

    // ------------------ Booking Confirmation ------------------

    alert(
      `==================✅ Booking Confirmed! =============\n
                    Guest: ${guestName}\n
                    Phone: ${guestPhone}\n
                    Email: ${guestEmail}\n
                    Room: ${selectedRoom.type}\n
                    Nights: ${numberOfNights}\n
                    Guests: ${numberOfGuests}\n
                    Total Price (with ${
                      taxRate * 100
                    }% tax): ${totalAmount} BDT`
    );

    selectedRoom.available--;

    // new guests

    let guestId = guests.length > 0 ? guests[guests.length - 1].id : 0;

    let newGuest = {
      id: guestId + 1,
      name: guestName,
      phone: guestPhone,
      email: guestEmail,
      checkedIn: true,
      age: guestAge,
    };

    guests.push(newGuest);

    let newBooking = {
      bookingID: Math.floor(Math.random() * 200),
      guestID: guestId + 1,
      roomID: selectedRoom.id,
      nights: numberOfNights,
      guests: numberOfGuests,
      totalPrice: totalAmount,
      paid: true,
      checkInDate: new Date().toLocaleDateString("en-CA"),
      checkOutDate: new Date(
        Date.now() + numberOfNights * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-CA"),
    };

    bookings.push(newBooking);

    let cancelBooking = window
      .prompt("Do you want to cancel booking??(yes/no)")
      .toLowerCase()
      .trim();

    if (!cancelBooking) {
      alert("⚠️ Input cannot be empty. Please type ‘yes’ or ‘no’.");
      continue;
    }

    if (cancelBooking !== "yes" && cancelBooking !== "no") {
      alert("❌ Invalid choice. Please enter only ‘yes’ or ‘no’.");
      continue;
    }

    if (cancelBooking === "yes") {
      let askName = window.prompt("What is your name??");
      let askPhone = window.prompt("What is your phone number??");
      let askMail = window.prompt("What is your email id??");

      if (!askName || !isNaN(askName)) {
        alert("❌ Name cannot be empty or numeric.");
        continue;
      }

      if (!askPhone) {
        alert("⚠️ Phone number cannot be empty.");
        continue;
      }

      if (isNaN(askPhone) || askPhone.length < 11) {
        alert("❌ Invalid phone number. Please enter only digits.");
        continue;
      }

      if (!askMail || !askMail.includes("@")) {
        alert("❌ Invalid email address. Please include '@'.");
        continue;
      }

      let foundBooking = bookings.find(
        (b) =>
          b.guestID ===
          guests.find(
            (g) =>
              g.name === askName && g.phone === askPhone && g.email === askMail
          )?.id
      );

      if (foundBooking) {
        let refund = foundBooking.totalPrice * 0.8;

        alert(`
                          DreamStay Hotel
                    Booking Cancellation Invoice
            ===============================

            👤 Guest Name: ${askName}
            📞 Phone: ${askPhone}
            📧 Email: ${askMail}

            🏨 Room ID: ${foundBooking.roomID}
            📅 Check-in Date: ${foundBooking.checkInDate}
            📅 Check-out Date: ${foundBooking.checkOutDate}
            🛏️ Nights: ${foundBooking.nights}
            👥 Guests: ${foundBooking.guests}

            💰 Total Paid: ${foundBooking.totalPrice.toFixed(2)} BDT
            💸 Refund (80%): ${refund.toFixed(2)} BDT
            ⚠️ Cancellation Fee (20%): ${(
              foundBooking.totalPrice - refund
            ).toFixed(2)} BDT

            ✅ Refund processed successfully!

            Thank you for choosing DreamStay Hotel.
            We hope to serve you again.
            ===============================
            `);

        selectedRoom.available++;

        let index = bookings.indexOf(foundBooking);
        bookings.splice(index, 1);
      } else {
        alert("⚠️ No booking found with the given details.");
      }
    } else {
      alert("✅ Great! Your booking remains active.");
    }

    booking = false;
  }
};

booking();
