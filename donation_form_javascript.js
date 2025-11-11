// ------------------------------
// Feature 1: Form Validation
// ------------------------------
function validateForm() {
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const address1 = document.getElementById("addr1").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value.trim();
  const donationAmount = document.querySelector('input[name="donation_amount"]:checked');

  if (!firstName || !lastName || !email || !address1 || !city || !state || !country || !zip || !donationAmount) {
    alert("⚠️ Please fill in all required fields before submitting.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("❌ Please enter a valid email address.");
    return false;
  }

  return true;
}

// ------------------------------
// Feature 2: Email Validation Function
// ------------------------------
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// ------------------------------
// Feature 3: Show/Hide "Other Amount" Field
// ------------------------------
document.querySelectorAll('input[name="donation_amount"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const otherAmountField = document.getElementById("other_amount");
    if (this.value === "other") {
      otherAmountField.style.display = "inline-block";
    } else {
      otherAmountField.style.display = "none";
      otherAmountField.value = "";
    }
  });
});

// ------------------------------
// Feature 4: Recurring Donation Toggle
// ------------------------------
const recurringCheckbox = document.getElementById("recurring");
if (recurringCheckbox) {
  recurringCheckbox.addEventListener("change", function () {
    const recurringFields = document.querySelectorAll("#recurring_amount, #recurring_months");
    recurringFields.forEach((field) => {
      field.disabled = !this.checked;
      field.style.backgroundColor = this.checked ? "#ffffff" : "#f0f0f0";
    });
  });
}

// ------------------------------
// Feature 5: Default Select Options (Dhaka & Bangladesh)
// ------------------------------
window.onload = function () {
  document.getElementById("state").value = "Dhaka";
  document.getElementById("country").value = "BGD";
};

// ------------------------------
// Feature 6: Reset Button Confirmation
// ------------------------------
const resetButton = document.getElementById("reset_button");
if (resetButton) {
  resetButton.addEventListener("click", function (event) {
    const confirmReset = confirm("Are you sure you want to reset all fields?");
    if (!confirmReset) {
      event.preventDefault();
    }
  });
}

// ------------------------------
// Feature 7: Honorarium / Memorial Field Logic
// ------------------------------
document.querySelectorAll('input[name="donation_type"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const ackName = document.getElementById("ack_name");
    if (this.value === "honor") {
      ackName.placeholder = "Name to honor";
    } else if (this.value === "memory") {
      ackName.placeholder = "Name in memory of";
    } else {
      ackName.placeholder = "";
    }
  });
});

// ------------------------------
// Feature 8: Character Limit on Comments
// ------------------------------
const commentsField = document.getElementById("comments");
if (commentsField) {
  commentsField.addEventListener("input", function () {
    const limit = 200;
    if (this.value.length > limit) {
      alert("You have reached the 200-character limit!");
      this.value = this.value.substring(0, limit);
    }
  });
}

// ------------------------------
// Feature 9: Calculate Recurring Donation Total
// ------------------------------
const recurringAmount = document.getElementById("recurring_amount");
const recurringMonths = document.getElementById("recurring_months");

function updateRecurringTotal() {
  const amount = parseFloat(recurringAmount.value) || 0;
  const months = parseInt(recurringMonths.value) || 0;
  const total = amount * months;

  let totalDisplay = document.getElementById("total_display");
  if (!totalDisplay) {
    totalDisplay = document.createElement("p");
    totalDisplay.id = "total_display";
    recurringAmount.parentNode.appendChild(totalDisplay);
  }
  totalDisplay.textContent = `💲 Total donation for ${months} months: $${total.toFixed(2)}`;
}

if (recurringAmount && recurringMonths) {
  recurringAmount.addEventListener("input", updateRecurringTotal);
  recurringMonths.addEventListener("input", updateRecurringTotal);
}
