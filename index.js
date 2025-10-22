const express = require("express");
const app = express();

// Use env PORT in prod, fallback to 8000 locally
const port = process.env.PORT || 8000;

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Basic 404 handler (so you get a clean “Not Found” instead of a crash)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Not Found</h1>");
});

// Error handler (shows the error nicely instead of a white page)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(`<h1>500 - Server Error</h1><pre>${err.message}</pre>`);
});

app.listen(port, () =>
  console.log(`Node server is running on port ${port}...`)
);