
window.promises = [];

// Function to generate a random delay between 1 and 5 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 5 + 1) * 1000;
}

// Create an array of five promises with random delays
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay / 1000} seconds`);
    }, delay);
  });
  promises.push(promise);
}

// Use Promise.any to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.log(error);
  });