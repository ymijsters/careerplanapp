const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/goal", require("./routes/api/goal"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
