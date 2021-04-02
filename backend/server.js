require("dotenv").config({ path: `./config.env` });
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();
const app = express();

// pulling json data to client
app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
