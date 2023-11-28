const express = require("express");
const app = express();
const port = 3000;

// Import the routers
const mainRouter = require("./mainRouter");
const contactRouter = require("./contactRouter");

app.use(express.static("./"));

// Use the routers
app.use("/", mainRouter);
app.use("/", contactRouter);

// Listen on the configured port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
