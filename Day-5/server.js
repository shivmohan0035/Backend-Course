const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware ---> it is a function that has access to the request and response objects and can modify them or perform some action before passing control to the next middleware function in the stack. It is used to perform tasks such as authentication, logging, and error handling.
app.use((req, res, next) => {
  console.log("first middleware run");
  next();
});

// creating route
app.get('/', function (req, res) {
  res.send('Welcome');
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
} )