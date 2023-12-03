document.addEventListener("DOMContentLoaded", function () {
  loadpagedata();
});
function enableEdit() {
  var element = document.getElementById("editableText");
  element.contentEditable = true;
  element.focus();
}

// Function to save edited text to local storage
function saveToLocalStorage() {
  var editedText = document.getElementById("editableText").innerText;
  localStorage.setItem("editedText", editedText);
}

// Check if there is previously edited text in local storage
var storedText = localStorage.getItem("editedText");
if (storedText) {
  document.getElementById("editableText").innerText = storedText;
}

// Add event listener to save edited text on blur
document.getElementById("editableText").addEventListener("blur", function () {
  saveToLocalStorage();
});
function loadpagedata() {
  getQuote();
  // Array of image URLs
  const backgroundImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
  ];
  // Function to set a random background image

  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);

  // Get the selected image URL
  const selectedImage = backgroundImages[randomIndex];

  // Set the body background to the selected image
  document.body.style.backgroundImage = `url(backgrounds/${selectedImage})`;
}

function getQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. In the face of adversity, we discover our true strengths. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. Persistence and determination are the keys to achieving greatness. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. Follow your passions, chase your dreams, and create your own path. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. Your choices shape your destiny. - Ralph Waldo Emerson",
    "The biggest risk is not taking any risk. In a world that is constantly changing, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Believe you can and you're halfway there. Confidence and self-belief are the driving forces behind all achievements. - Theodore Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. Our attitude and mindset determine our happiness and success. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow will be our doubts of today. Embrace your potential and have faith in your abilities. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. Your actions today shape the world you'll live in tomorrow. - Abraham Lincoln",
    "Success is not just about making money. It's about making a difference. - Unknown",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Your journey begins with a single step. Don't be afraid to take it. - Unknown",
    "Your dreams are worth chasing. Never give up on what sets your soul on fire. - Unknown",
    "Don't be discouraged by the challenges you face; they are just stepping stones to success. - Unknown",
    "Every day is a new opportunity to make a positive change in your life. - Unknown",
    "Your attitude determines your direction. Stay positive and keep moving forward. - Unknown",
    "The only way to do great work is to love what you do. - Unknown",
    "Your potential is endless. Don't limit yourself. - Unknown",
    "Success is not the destination; it's the journey. - Unknown",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote").innerHTML = randomQuote;
}
function constanttime() {
  // Get the current date and time
  var today = new Date();
  console.log(today);
  var hours = today.getHours() % 12 || 12;
  var minutes = today.getMinutes();
  // Determine if it's AM or PM
  var ampm = today.getHours() >= 12 ? "PM" : "AM";
  // Display the time
  var currentTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
  document.getElementById("current-time").innerHTML = currentTime;
  document.getElementById("ampm").innerHTML = ampm;
  // Create a new Date object for the current date
  const date = new Date();

  // Define arrays for day names and month names
  const dayNames = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  // Get the day, month, and year
  const day = dayNames[date.getUTCDay()];
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Get the day of the month with leading zeros (e.g., 01, 02, 03)
  const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");

  // Format the date
  const formattedDate = `${day}, ${month} / ${dayOfMonth} / ${year}`;

  document.getElementById("current-full-date").innerHTML = formattedDate;

  // Update the time every minute
  setTimeout(constanttime, 60000);
}

// Call the function to initialize
constanttime();
