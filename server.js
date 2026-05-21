const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Public folder serve
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login Route
app.post("/login", (req, res) => {

  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    success: true,
    message: "Data Received Successfully"
  });

});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running On PORT ${PORT}`);
});
