const express = require('express');
const app = express();

app.set('view engine', 'ejs');


const indexRouter = require("./routes/page");
const usersRouter = require("./routes/users");
const tutorialOneRouter = require("./routes/tutorials/04-website");
const tutorialTwoRouter = require("./routes/tutorials/05-cart-quantity");
const tutorialThreeRouter = require("./routes/tutorials/05-variables");
const tutorialFourRouter = require("./routes/tutorials/06-booleans");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tutorials/04-website", tutorialOneRouter);
app.use("/tutorials/05-cart-quantity", tutorialTwoRouter);
app.use("/tutorials/05-variables", tutorialThreeRouter);
app.use("/tutorials/06-booleans", tutorialFourRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');});