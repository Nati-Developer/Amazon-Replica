const functions = require("firebase-functions");


const express = require("express")
const cors = require("cors");
const stripe = require('stripe') (
    'sk_test_51O6whgLpOmc0cn346RFVzQxxYvT5CfPew2xSQtPebxokQtOaYiVZ9YX472v5XqPqT9kiBpBmY05L3Ui91FZaDtgc00XeYc4Lin'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Reaceived for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    client_secret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);