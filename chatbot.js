const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chatbotQA = {
  "How are you?": "I'm a bot, so I don't have feelings, but thanks for asking!",
  "What is your name?": "I'm ChatGPT, your friendly neighborhood chatbot.",
  "What can you do?":
    "I can chat with you and respond to some predefined questions.",
  "Tell me a joke.":
    "Why don't scientists trust atoms? Because they make up everything!",
};

function getChatbotResponse(input) {
  return (
    chatbotQA[input] ||
    "I'm not sure how to respond to that. Can you try asking something else?"
  );
}

function startChatbot() {
  rl.setPrompt("You: ");
  rl.prompt();

  rl.on("line", (userInput) => {
    userInput = userInput.trim();
    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      rl.close();
    } else {
      console.log("ChatGPT:", getChatbotResponse(userInput));
      rl.prompt();
    }
  }).on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

startChatbot();
