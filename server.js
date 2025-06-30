// server.js
// Simple Express server to serve the static portfolio on Heroku

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory (where index.html resides)
app.use(express.static(__dirname));

// Fallback to index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio server listening on port ${PORT}`);
}); 