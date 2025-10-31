// ============================ book list =================================== //

const books = [
  {
    id: 1,
    title: "Pather Panchali",
    author: "Bibhutibhushan Bandyopadhyay",
    isAvailable: true,
    copies: 5,
    price: 550,
  },
  {
    id: 2,
    title: "Chander Pahar",
    author: "Bibhutibhushan Bandyopadhyay",
    isAvailable: true,
    copies: 3,
    price: 480,
  },
  {
    id: 3,
    title: "Shesher Kobita",
    author: "Rabindranath Tagore",
    isAvailable: false,
    copies: 0,
    price: 400,
  },
  {
    id: 4,
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    isAvailable: true,
    copies: 4,
    price: 350,
  },
  {
    id: 5,
    title: "Devdas",
    author: "Sarat Chandra Chattopadhyay",
    isAvailable: true,
    copies: 6,
    price: 500,
  },
  {
    id: 6,
    title: "Pathe Prantore",
    author: "Sunil Gangopadhyay",
    isAvailable: true,
    copies: 2,
    price: 420,
  },
  {
    id: 7,
    title: "Arek Falgun",
    author: "Sunil Gangopadhyay",
    isAvailable: false,
    copies: 0,
    price: 380,
  },
  {
    id: 8,
    title: "Durbine",
    author: "Samaresh Majumdar",
    isAvailable: true,
    copies: 3,
    price: 450,
  },
  {
    id: 9,
    title: "Kalbela",
    author: "Samaresh Majumdar",
    isAvailable: true,
    copies: 5,
    price: 520,
  },
  {
    id: 10,
    title: "Kalpurush",
    author: "Samaresh Majumdar",
    isAvailable: true,
    copies: 2,
    price: 480,
  },
  {
    id: 11,
    title: "Aranyer Din Ratri",
    author: "Sunil Gangopadhyay",
    isAvailable: false,
    copies: 0,
    price: 390,
  },
  {
    id: 12,
    title: "Kobita Samagra",
    author: "Jibanananda Das",
    isAvailable: true,
    copies: 4,
    price: 600,
  },
  {
    id: 13,
    title: "Raikamal",
    author: "Ahmad Sofa",
    isAvailable: true,
    copies: 1,
    price: 350,
  },
  {
    id: 14,
    title: "Madhukor",
    author: "Selina Hossain",
    isAvailable: true,
    copies: 2,
    price: 430,
  },
  {
    id: 15,
    title: "Surjo Dighol Bari",
    author: "Abul Fazal",
    isAvailable: false,
    copies: 0,
    price: 400,
  },
  {
    id: 16,
    title: "Nondito Noroke",
    author: "Humayun Ahmed",
    isAvailable: true,
    copies: 5,
    price: 500,
  },
  {
    id: 17,
    title: "Daruchini Dip",
    author: "Humayun Ahmed",
    isAvailable: true,
    copies: 3,
    price: 470,
  },
  {
    id: 18,
    title: "Achinpur",
    author: "Humayun Ahmed",
    isAvailable: true,
    copies: 4,
    price: 490,
  },
  {
    id: 19,
    title: "Lalsalu",
    author: "Syed Waliullah",
    isAvailable: true,
    copies: 2,
    price: 450,
  },
  {
    id: 20,
    title: "Mrityukhudha",
    author: "Kazi Nazrul Islam",
    isAvailable: true,
    copies: 3,
    price: 530,
  },
];

// ================================  book showing =========================== //

const showBook = () => {
  let list = "Library Book List :\n";

  for (let book of books) {
    list += `${book.id}. ${book.title} by ${book.author} — ${
      book.isAvailable ? "Available" : "Unavailable"
    } (${book.copies} copies)\n`;
  }
  alert(list);
  return list;
};

// ============================= search book ================================ //

const searchBook = () => {
  let searching = true;

  while (searching) {
    let search = window
      .prompt("Search your favourite books :")
      .toLowerCase()
      .trim();

    if (!search) {
      alert("Please Enter Book Name");
      continue;
    }

    let searchedBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(search);
    });

    if (searchedBooks.length === 0) {
      alert(`NO BOOKS FOUND!!TRY AGAIN 🥰`);
      continue;
    }

    let searchList = `🔍 Search Results for "${search}":\n\n`;

    searchedBooks.forEach((book) => {
      searchList += `🆔 ID: ${book.id}\n`;
      searchList += `📖 Title: ${book.title}\n`;
      searchList += `✍️ Author: ${book.author}\n`;
      searchList += `📦 Copies: ${book.copies}\n`;
      searchList += `✅ Available: ${book.isAvailable ? "Yes" : "No"}\n\n`;
    });

    alert(searchList);

    let again = window
      .prompt("Do you want to search again? (yes/no)")
      ?.toLowerCase();
    if (again !== "yes") searching = false;
  }
};

// ================================ add book ================================= //

const addBook = () => {
  let add = true;

  while (add) {
    let adding = window
      .prompt("Do you want to add books? (yes/no)")
      .toLowerCase();

    if (adding.toLowerCase() === "yes") {
      const title = window.prompt("Enter book title :");
      const author = window.prompt("Enter author name :");
      const copies = Number(window.prompt("Enter number of copies :"));

      if (!title || !author || isNaN(copies) || copies <= 0) {
        alert("Invalid book data");
        continue;
      }

      const duplicate = books.some(
        (b) => b.title.toLowerCase() === adding.toLowerCase()
      );

      if (duplicate) {
        alert("Book already exists");
        continue;
      }

      const newBooks = {
        id: books.length + 1,
        title,
        author,
        isAvailable: copies > 0,
        copies: copies,
      };

      books.push(newBooks);
      alert(`${title} Added Successfully 😃`);

      let updatedList = "📚 Updated Library Book List:\n\n";

      for (let book of books) {
        updatedList += `${book.id}. ${book.title} by ${book.author} — ${
          book.isAvailable ? "Available" : "Unavailable"
        } (${book.copies} copies)\n`;
      }

      alert(updatedList);
      break;
    } else if (adding.toLowerCase() === "no") {
      alert("No new book added.");
      break;
    } else {
      alert("Please submit only yes or no");
      continue;
    }
  }
};

// ================================ borrow book ================================= //

const borrowBook = () => {
  let borrowing = true;

  while (borrowing) {
    let askBorrow = window
      .prompt("Do you want borrow some book? (yes/no)")
      .toLowerCase()
      .trim();

    if (!askBorrow || !isNaN(askBorrow)) {
      alert("Invalid Input");
      continue;
    }

    if (askBorrow.toLowerCase() === "yes") {
      let bookName = window.prompt("Enter book name :").toLowerCase().trim();

      for (let book of books) {
        if (book.title.toLowerCase() === bookName.toLowerCase()) {
          if (book.copies > 0) {
            book.copies--;
            alert(
              `📖 You borrowed '${book.title}'. Copies left: ${book.copies}`
            );
            return;
          } else if (book.copies === 0) {
            alert("This book is not available at this moment");
            return;
          } else {
            alert(`❌ '${book.title}' is currently unavailable!`);
            return;
          }
        }
      }
    } else if (askBorrow.toLowerCase() === "no") {
      borrowing = false;
    } else {
      alert("Please submit only yes or no");
      continue;
    }
  }
};

// ================================ return book ================================= //

let returnBook = () => {
  let returning = true;

  while (returning) {
    let tookReturn = window
      .prompt("Enter the book title you want to return:")
      .toLowerCase()
      .trim();

    if (!tookReturn || !isNaN(tookReturn)) {
      alert("Invalid Input");
      continue;
    }

    let found = false;

    for (let book of books) {
      if (book.title.toLowerCase() === tookReturn.toLowerCase()) {
        book.copies++;
        book.isAvailable = true;
        alert(`✅ You returned '${book.title}'. Total copies: ${book.copies}`);
        found = true;
        break;
      }
    }
    if (!found) alert("❌ Book not found!");

    let again = window
      .prompt("Do you want to return another book? (yes/no)")
      .toLowerCase();
    if (again.toLowerCase() === "yes") returning = true;
    else if (again.toLowerCase() === "no") returning = false;
    else {
      alert("Submit only yes / no or I will kill you 😡");
      continue;
    }
  }
};

// ================================ buying books =============================== //

const buyBooks = () => {
  let buying = true;
  let total = 0;
  let invoiceText = "";

  const available = books.filter((b) => b.isAvailable);

  while (buying) {
    let askToBuy = window.prompt("📚 Do you want to buy some books? (yes/no)");

    if (!askToBuy || !isNaN(askToBuy)) {
      alert("⚠️ Invalid Input!");
      break;
    }

    if (askToBuy.toLowerCase() === "yes") {
      let bookName = window.prompt("Enter book title : ");
      let quantity = Number(window.prompt("Enter book quantity :"));

      if (!bookName || !isNaN(bookName) || isNaN(quantity) || quantity <= 0) {
        alert("⚠️ Invalid Input!");
        continue;
      }

      let found = false;

      for (let book of books) {
        if (book.title.toLowerCase() === bookName.toLowerCase()) {
          found = true;

          if (book.copies >= quantity) {
            let subTotal = book.price * quantity;
            total += subTotal;
            book.copies -= quantity;

            invoiceText += `📖 ${book.title} x ${quantity} = ৳${subTotal}\n`;
            alert(
              `✅ You bought "${book.title}"\nQuantity: ${quantity}\nPrice per book: ৳${book.price}\nSubtotal: ৳${subTotal}`
            );
          } else {
            alert(`❌ Only ${book.copies} copies available right now.`);
          }
          break;
        }
      }

      if (!found) {
        alert("🚫 Book not found or currently unavailable!");
      }

      let again = window.prompt("Do you want to buy another book? (yes/no)");
      if (again.toLowerCase() === "no") {
        buying = false;
      }
    } else if (askToBuy.toLowerCase() === "no") {
      alert("❌ No books purchased.");
      buying = false;
    } else {
      alert("⚠️ Please answer only yes or no.");
      continue;
    }
  }

  if (total > 0) {
    alert(
      `🧾 INVOICE\n------------------\n${invoiceText}------------------\nTotal: ৳${total}\nThank you for your purchase! ❤️`
    );
  } else {
    alert("🛒 You didn’t buy anything!");
  }
};

// ================================= main manu ================================= //

function startLibrarySystem() {
  while (true) {
    const choice = window.prompt(
      `📚 Library Menu:
    1️⃣ Show All Books
    2️⃣ Search Book
    3️⃣ Add New Book
    4️⃣ Borrow Book
    5️⃣ Return Book
    6️⃣ Buy Book
    0️⃣ Exit
Enter your choice:`
    );

    if (choice === "1") showBook();
    else if (choice === "2") searchBook();
    else if (choice === "3") addBook();
    else if (choice === "4") borrowBook();
    else if (choice === "5") returnBook();
    else if (choice === "6") buyBooks();
    else if (choice === "0") {
      alert("👋 Thank you for using Library System!");
      break;
    } else {
      alert("❌ Invalid choice! Try again.");
    }
  }
}

startLibrarySystem();
