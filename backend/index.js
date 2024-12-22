require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { WatchlistModel } = require("./models/WatchlistModel");

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });
//     newHolding.save()
//   });
//   res.send("Done")
// });

// app.get("/addPostions", async (req, res) => {
//   let tempPositions = [];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!!!");
// });

// app.get("/addWatchlist", async (req, res) => {
//   let watchlist = [];

//   watchlist.forEach((item) => {
//     let newWatchlist = new WatchlistModel({
//       name: item.name,
//       price: item.price,
//       percent: item.percent,
//       isDown: item.isDown,
//     });

//     newWatchlist.save();
//   });
//   res.send("Done!");
// });

app.get("/holdings", async (req, res) => {
  let holdings = await HoldingsModel.find({});
  res.json(holdings);
});

app.get("/positions", async (req, res) => {
  let positions = await PositionsModel.find({});
  res.json(positions);
});

app.get("/watchlists", async (req, res) => {
  let watchlists = await WatchlistModel.find({});
  res.json(watchlists);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = await new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App Started");
  mongoose.connect(uri);
  console.log("DB started!");
});
