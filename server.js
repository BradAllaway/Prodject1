const express = require('express');
const app = express();

app.set('view engine', 'ejs');


const indexRouter = require("./routes/page");
const usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');});