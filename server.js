const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const expressValidator = require("express-validator")
const app = express();

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Add Validators
app.use(
  expressValidator({
    customValidators: {
      isArray: function (value) {
        return Array.isArray(value);
      },
      notEmpty: function (array) {
        return array.length > 0;
      },
      existsInArray: function (array, key) {
        array.forEach((element) => {
          if (!key in element) {
            return false;
          }
        });
        return true;
      },
    },
  })
);

// Define routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/goal", require("./routes/api/goal"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
