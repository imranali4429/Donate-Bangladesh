// Reuseable function for all card

function handleDonationAmount(
  inputId,
  cardId,
  buttonId,
  headerId,
  cardTitleId
) {
  document.getElementById(buttonId).addEventListener("click", function (event) {
    event.preventDefault();

    //Access the input amount
    const donationAmount = document.getElementById(inputId).value.trim();
    const donationNumber = parseFloat(donationAmount);

    // ---------input Validation start ---------
    if (isNaN(donationNumber) || donationNumber <= 0) {
      alert(
        "Please enter a valid donation amount ( Not allow negative, zero or empty)"
      );
      return;
    }
    const isValid = /^\d+$/.test(donationAmount);
    if (!isValid) {
      alert("Please enter a valid number (only digits allowed)");
      return;
    }
    // ---------input Validation end ---------

    // current amount from card
    const cardEl = document.getElementById(cardId);
    const cardTotal = parseFloat(cardEl.dataset.amount);

    // current amount from header-amount
    const headerEl = document.getElementById(headerId);
    const headerTotal = parseFloat(headerEl.dataset.amount);

    // added to card amount
    const newTotal = cardTotal + donationNumber;

    // disctucted from header
    const newHeaderTotal = headerTotal - donationNumber;

    // Update card dataset and UI
    cardEl.dataset.amount = newTotal;
    cardEl.innerText = newTotal;

    // update headeramount dataset and UI
    headerEl.dataset.amount = newHeaderTotal;
    headerEl.innerText = newHeaderTotal;

    // Clear input field
    document.getElementById(inputId).value = "";
    // --------------------------------------------------

    // Add to transaction history
    const eventName = document.getElementById(cardTitleId).innerText;
    const date = new Date().toString();
    createHistoryCard(eventName, donationNumber, date);

    // Show success modal
    document.getElementById("success_modal").showModal();
  });
}

// dynamically create html  
function createHistoryCard(eventName, donationAmount, date) {
  const historyCardsContainer = document.getElementById(
    "history-cards-container"
  );
  const newCard = document.createElement("div");
  newCard.className = "card bg-base-100 shadow-xl text-center";
  newCard.innerHTML = `
    <div class="card-body">
      <p class="font-bold">${donationAmount} Taka is Donated for ${eventName}
      </p>
      <p>${date}</p>
    </div>
  `;
  historyCardsContainer.appendChild(newCard);
}

// show donation cards
function showDonationCards() {
  document.getElementById("donation-cards-container").style.display = "block";
  document.getElementById("transtion-history").style.display = "none";

  // color change
  document.getElementById("donation-btn").classList.add("bg-lime-300");
  document.getElementById("history-btn").classList.remove("bg-lime-300");
}

function showHistory() {
  document.getElementById("donation-cards-container").style.display = "none";
  document.getElementById("transtion-history").style.display = "block";

  // color change
  document.getElementById("history-btn").classList.add("bg-lime-300");
  document.getElementById("donation-btn").classList.remove("bg-lime-300");
}
