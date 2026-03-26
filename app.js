const express = require("express");
const path = require("path");

const app = express();

// Use dynamic port (IMPORTANT for Beanstalk)
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "my_skills.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
