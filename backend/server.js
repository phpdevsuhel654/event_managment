const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const appRoutes = require("./routes");

const app = express();

// Connect to the database
connectDB();

// Middleware, routes, etc.
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use("/api", appRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
