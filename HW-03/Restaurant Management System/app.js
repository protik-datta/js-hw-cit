const menu = [
  // ======= Starters =======
  {
    id: 1,
    name: "Chicken Spring Roll",
    category: "Starter",
    price: 120,
    available: true,
  },
  {
    id: 2,
    name: "Crispy Fried Wonton",
    category: "Starter",
    price: 130,
    available: true,
  },
  {
    id: 3,
    name: "Garlic Bread",
    category: "Starter",
    price: 100,
    available: true,
  },
  {
    id: 4,
    name: "Chicken Lollipop",
    category: "Starter",
    price: 160,
    available: true,
  },
  {
    id: 5,
    name: "French Fries",
    category: "Starter",
    price: 90,
    available: true,
  },
  {
    id: 6,
    name: "Cheese Balls",
    category: "Starter",
    price: 140,
    available: true,
  },
  { id: 7, name: "Veg Soup", category: "Starter", price: 110, available: true },

  // ======= Main Course =======
  {
    id: 8,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 250,
    available: true,
  },
  {
    id: 9,
    name: "Mutton Biryani",
    category: "Main Course",
    price: 350,
    available: true,
  },
  {
    id: 10,
    name: "Beef Tehari",
    category: "Main Course",
    price: 300,
    available: true,
  },
  {
    id: 11,
    name: "Butter Chicken",
    category: "Main Course",
    price: 280,
    available: true,
  },
  {
    id: 12,
    name: "Beef Curry",
    category: "Main Course",
    price: 320,
    available: true,
  },
  {
    id: 13,
    name: "Fried Rice with Chicken",
    category: "Main Course",
    price: 200,
    available: true,
  },
  {
    id: 14,
    name: "Egg Fried Rice",
    category: "Main Course",
    price: 150,
    available: true,
  },
  {
    id: 15,
    name: "Chicken Chowmein",
    category: "Main Course",
    price: 180,
    available: true,
  },
  {
    id: 16,
    name: "Vegetable Khichuri",
    category: "Main Course",
    price: 130,
    available: true,
  },
  {
    id: 17,
    name: "Grilled Fish",
    category: "Main Course",
    price: 270,
    available: true,
  },
  {
    id: 18,
    name: "Prawn Curry",
    category: "Main Course",
    price: 330,
    available: true,
  },

  // ======= Desserts =======
  {
    id: 19,
    name: "Chocolate Mousse",
    category: "Dessert",
    price: 180,
    available: true,
  },
  {
    id: 20,
    name: "Vanilla Ice Cream",
    category: "Dessert",
    price: 100,
    available: true,
  },
  {
    id: 21,
    name: "Fruit Custard",
    category: "Dessert",
    price: 150,
    available: true,
  },
  {
    id: 22,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 90,
    available: true,
  },
  {
    id: 23,
    name: "Cheesecake",
    category: "Dessert",
    price: 220,
    available: true,
  },
  {
    id: 24,
    name: "Brownie with Ice Cream",
    category: "Dessert",
    price: 200,
    available: true,
  },

  // ======= Beverages =======
  {
    id: 25,
    name: "Coca Cola",
    category: "Beverage",
    price: 50,
    available: true,
  },
  {
    id: 26,
    name: "Lemonade",
    category: "Beverage",
    price: 70,
    available: true,
  },
  {
    id: 27,
    name: "Cold Coffee",
    category: "Beverage",
    price: 120,
    available: true,
  },
  {
    id: 28,
    name: "Hot Coffee",
    category: "Beverage",
    price: 100,
    available: true,
  },
  {
    id: 29,
    name: "Mango Juice",
    category: "Beverage",
    price: 90,
    available: true,
  },
  {
    id: 30,
    name: "Mineral Water",
    category: "Beverage",
    price: 30,
    available: true,
  },
];

const tables = [
  { tableNumber: 1, capacity: 2, occupied: false },
  { tableNumber: 2, capacity: 2, occupied: false },
  { tableNumber: 3, capacity: 4, occupied: false },
  { tableNumber: 4, capacity: 4, occupied: false },
  { tableNumber: 5, capacity: 4, occupied: false },
  { tableNumber: 6, capacity: 6, occupied: false },
  { tableNumber: 7, capacity: 6, occupied: false },
  { tableNumber: 8, capacity: 6, occupied: false },
  { tableNumber: 9, capacity: 8, occupied: false },
  { tableNumber: 10, capacity: 8, occupied: false },
];

const orders = [];

const settings = {
  taxRate: 0.05,
  serviceCharge: 0.1,
};

const allStatus = ["pending", "completed"];
let randomStatus = allStatus[Math.floor(Math.random() * allStatus.length)];

const starters = menu.filter((item) => {
  return item.category === "Starter";
});
const mainCourse = menu.filter((item) => {
  return item.category === "Main Course";
});
const dessert = menu.filter((item) => {
  return item.category === "Dessert";
});
const beverage = menu.filter((item) => {
  return item.category === "Beverage";
});

// ================================== show menu  =============================== //

const showMenu = () => {
  let showing = true;

  while (showing) {
    let askMenu = prompt("Do you want to see the menu??(yes/no)");

    if (!askMenu) {
      alert("Invalid Input");
    }

    if (askMenu.toLowerCase() === "yes") {
      alert(`Check your console`);
      console.log(`
===================================== MENU =====================================

-------------------------------------------------------------------------------------
Name                     | Category                 | Price
-------------------------------------------------------------------------------------
`);

      for (let food of menu) {
        console.log(
          `${food.name.padEnd(25)} | ${food.category.padEnd(25)} | ৳${
            food.price
          }`
        );
      }

      console.log(
        "-------------------------------------------------------------------------------------"
      );
      break;
    } else if (askMenu.toLowerCase() === "no") {
      alert(`No menu item`);
      break;
    } else {
      alert(`Please enter only yes or no`);
      continue;
    }
  }
  showing = false;
};

// showMenu();

// ================================= search menu ================================ //

const searchMenu = () => {
  let ordering = true;

  while (ordering) {
    let itemName = prompt(
      "Enter food name which you want to order (or type 'exit' to stop):"
    )
      ?.toLowerCase()
      .trim();

    if (!itemName || itemName === "exit") {
      alert("Thank you for visiting our restaurant! 🍽️");
      ordering = false;
      break;
    }

    const searchedResult = menu.find((item) => {
      return item.name.toLowerCase() === itemName;
    });

    if (!searchedResult) {
      alert(`⚠️ Sorry! "${itemName}" is currently unavailable.`);
      continue;
    }

    alert(`
                ✅ Search Details:
        ──────────────────────────────
        🍴 Food Name : ${searchedResult.name}
        💰 Price      : ${searchedResult.price} BDT
        📦 Available  : ${searchedResult.available ? "Yes" : "No"}
        ──────────────────────────────
        `);

    return {
      searchedResult,
      itemName,
    };
  }
};

let search = searchMenu();
console.log(search);

// ================================= order menu ================================ //

const order = (search) => {
  let ordering = true;
  let total = 0;

  while (ordering) {
    let tableNum = Number(prompt("Enter your table number:"));
    let person = Number(prompt("How many people are with you?"));
    let quantity = Number(prompt("Enter quantity :"));

    if (
      !tableNum ||
      tableNum < 1 ||
      tableNum > tables.length ||
      isNaN(tableNum)
    ) {
      alert("Invalid table number");
      continue;
    }

    if (!person || person < 1 || isNaN(person)) {
      alert("Invalid number of people");
      continue;
    }

    let table = tables.find((t) => t.tableNumber === tableNum);

    if (!table) {
      alert(`Table ${tableNum} does not exist`);
      continue;
    }

    if (table.occupied) {
      alert(`Table ${tableNum} is already occupied`);
      continue;
    }

    if (person > table.capacity) {
      alert(`Table ${tableNum} can accommodate only ${table.capacity} people`);
      continue;
    }

    let itemID = Number(prompt("Enter Menu Item ID:"));

    if (itemID !== search.searchedResult.id) {
      alert(`Item ID ${itemID} is unavailable`);
      continue;
    }

    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("❌ Invalid input! Quantity must be a positive number.");
      continue;
    }

    if (!Number.isInteger(quantity)) {
      alert("❌ Quantity must be a whole number.");
      continue;
    }

    total = search.searchedResult.price * quantity;

    let tax = total * settings.taxRate;
    let serviceCharge = total * settings.serviceCharge;

    let finalAmount = total + tax + serviceCharge;

    // save order

    orders.push({
      orderID: search.searchedResult.id,
      tableNumber: tableNum,
      item: search.searchedResult.name,
      total: total,
      statuss: randomStatus,
      discount: 0,
      tax: "5%",
      totalAmount: finalAmount.toFixed(2),
    });

    alert(`
================= INVOICE ==============

🆔 Order ID       : ${search.searchedResult.id}
🍽️ Food Item      : ${search.searchedResult.name}
📋 Category       : ${search.searchedResult.category}
📌 Table Number   : ${tableNum}
👥 Guests         : ${person}
🔢 Quantity       : ${quantity}
💰 Item Total     : ৳${total.toFixed(2)}
💸 Tax (5%)       : ৳${(total * 0.05).toFixed(2)}
💵 Service Charge : ৳${(total * 0.1).toFixed(2)}
💰 Total Amount   : ৳${finalAmount.toFixed(2)}
📌 Status         : ${randomStatus.toUpperCase()}

Thank you for ordering with us! 🍽️

`);

    break;
  }
};

let orderFn = order(search);
console.log(orders);


