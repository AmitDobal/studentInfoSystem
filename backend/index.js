const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const db = require("./db/db");

const app = express();
const PORT = 8000;

app.use(express.json())

const router = express.Router();

app.use(
  router.get("/", (req, res) => {
    res.send("For api --> /api");
  })
);

//Routing
app.use("/api", apiRoutes);

//error Handling
app.use((error, req, res, next) => {
  if (true /*process.env.NODE_ENV === "development"*/) {
    console.log(error);
  }
  next(error);
});
app.use((error, req, res, next) => {
  if (true /*process.env.NODE_ENV === "development"*/) {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    });
  }
});


// Server
app.listen(PORT, () => {
  console.log("SERVER Is Running on PORT: ", PORT);
});
