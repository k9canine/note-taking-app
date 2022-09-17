const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");

// ------------------------------------ MIDDLEWARE ------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
  console.log('bet')
  res.json({bet: 'bet'})
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
