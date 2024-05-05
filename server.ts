import express from "express";

const app = express();

// Define routes...
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
