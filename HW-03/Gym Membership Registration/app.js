// ========================= gym plans ======================== //

const gymPlans = [
  {
    id: 1,
    name: "Basic",
    duration: "1 Month",
    price: 1000,
    facilities: ["Gym Access"],
  },
  {
    id: 2,
    name: "Standard",
    duration: "3 Months",
    price: 2500,
    facilities: ["Gym Access", "Locker"],
  },
  {
    id: 3,
    name: "Premium",
    duration: "6 Months",
    price: 4500,
    facilities: ["Gym Access", "Locker", "Trainer Support"],
  },
  {
    id: 4,
    name: "Elite",
    duration: "12 Months",
    price: 8000,
    facilities: ["All Access", "Trainer", "Steam Room"],
  },
  {
    id: 5,
    name: "Student",
    duration: "3 Months",
    price: 1800,
    facilities: ["Gym Access", "Student Discount"],
  },
  {
    id: 6,
    name: "Couple Plan",
    duration: "3 Months",
    price: 4000,
    facilities: ["Gym Access (2 People)", "Locker"],
  },
  {
    id: 7,
    name: "Women Special",
    duration: "6 Months",
    price: 4200,
    facilities: ["Ladies Gym Area", "Trainer Support"],
  },
  {
    id: 8,
    name: "Weekend Warrior",
    duration: "2 Months",
    price: 1500,
    facilities: ["Weekend Access Only"],
  },
  {
    id: 9,
    name: "Corporate",
    duration: "12 Months",
    price: 7000,
    facilities: ["All Access", "Company Discount"],
  },
  {
    id: 10,
    name: "VIP Lifetime",
    duration: "Lifetime",
    price: 15000,
    facilities: ["Unlimited Access", "Personal Trainer", "VIP Room"],
  },
];

// ========================= registration ===================== //

const memberReg = () => {
  let registration = true;

  while (registration) {
    let name = window.prompt("Enter your full name :");
    name = name.toLowerCase().trim();

    let age = Number(window.prompt("Enter your age :"));
    let phone = window.prompt("Enter your phone number (+880...):").trim();

    // name validation
    if (!name || !isNaN(name) || name.length < 3) {
      alert("❌ Invalid Name");
      continue;
    }

    // age validation
    if (isNaN(age) || age < 16 || age > 70) {
      alert("⚠️ Age must be between 16 and 70");
      continue;
    }

    // phone validation
    if (!phone.startsWith("+880") || phone.length !== 14) {
      alert("📵 Enter a valid Bangladeshi phone number (e.g. +8801XXXXXXXXX)");
      continue;
    }

    alert(
      `🎉 Registration Successful!\n\nName: ${name}\nAge: ${age}\nPhone: ${phone}`
    );
    return { name, age, phone };
  }
};

// ======================= choose your plan ============================ //

const planChoose = (member) => {
  let choosing = true;
  let total = 0;
  let invoiceText = "";

  while (choosing) {
    let choose = window
      .prompt(
        "Choose your plan from the list:\n" +
          gymPlans.map((p) => p.name).join(" / ")
      )
      .toLowerCase()
      .trim();

    let selectedPlan = gymPlans.find(
      (p) => p.name.toLowerCase().trim() === choose
    );

    if (!selectedPlan) {
      alert("❌ Please choose a valid plan from the list!");
      continue;
    }

    let chooseTrainer = window
      .prompt("Do you want a personal trainer? (yes/no)")
      .toLowerCase()
      .trim();

    if (chooseTrainer !== "yes" && chooseTrainer !== "no") {
      alert("⚠️ Please submit only yes or no!");
      continue;
    }

    total = selectedPlan.price;
    if (chooseTrainer === "yes") total += 1000;

    const date = new Date().toLocaleDateString("en-GB");

     invoiceText = `
        ================= 🧾 INVOICE ================= \n
        👤 Name: ${member.name}
        🎂 Age: ${member.age}
        📞 Phone: ${member.phone}

        🏋️‍♂️ Plan: ${selectedPlan.name}
        🕒 Duration: ${selectedPlan.duration}
        🎯 Facilities: ${selectedPlan.facilities.join(", ")}
        💪 Personal Trainer: ${
            chooseTrainer === "yes" ? "✅ Yes" : "❌ No"
        }

        ----------------------------------------
        💰 Total Payment: ৳${total}
        📅 Join Date: ${date}
        ========================================
        Thank you for joining our gym! 💥
        `;

    alert(invoiceText);

    choosing = false;
  }
};

const member = memberReg()
planChoose(member);
