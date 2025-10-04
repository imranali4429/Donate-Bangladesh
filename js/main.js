// function handleDonationAmount called

// for card-1
handleDonationAmount(
  "card-1-input-DA",
  "card-1-total-DA",
  "card-1-donate-btn",
  "header-amount",
  "card-1-title"
);

// for card-2
handleDonationAmount(
  "card-2-input-DA",
  "card-2-total-DA",
  "card-2-donate-btn",
  "header-amount",
  "card-2-title"
);

// for card-3
handleDonationAmount(
  "card-3-input-DA",
  "card-3-total-DA",
  "card-3-donate-btn",
  "header-amount",
  "card-3-title"
);

// Event listeners for donation and history buttons
document
  .getElementById("donation-btn")
  .addEventListener("click", showDonationCards);

  
document.getElementById("history-btn").addEventListener("click", showHistory);
