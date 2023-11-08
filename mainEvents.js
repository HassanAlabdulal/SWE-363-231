const customEventEmitter = require("./customEventEmitter.js");

function simulateUserLogin() {
  const userId = `USER_${Math.floor(Math.random() * 100)}`;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${userId} logged in`);
}

function simulateUserLogout() {
  const userId = `USER_${Math.floor(Math.random() * 100)}`;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${userId} logged out`);
}

// Event listener for 'userLoggedIn'
customEventEmitter.on("userLoggedIn", simulateUserLogin);

// Event listener for 'userLoggedOut'
customEventEmitter.on("userLoggedOut", simulateUserLogout);

function emitRandomEvents() {
  setInterval(() => {
    customEventEmitter.emit("userLoggedIn");
  }, Math.random() * 2000 + 100); // Random time between 0.1 to 2 seconds

  setInterval(() => {
    customEventEmitter.emit("userLoggedOut");
  }, Math.random() * 2000 + 100); // Random time between 0.1 to 2 seconds
}

emitRandomEvents();
