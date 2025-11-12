const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve all static files (html, css, js, images)
app.use(express.static(__dirname));

// Example API route (this will be your backend power 💪)
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend 🚀" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
