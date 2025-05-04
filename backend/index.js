const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/orders', async (req, res) => {
    console.log("Incoming request body:", req.body);

    const razorpay = new Razorpay({
        key_id: "rzp_test_XnEiyGAi048Iub",
        key_secret: "jziMLAbN8SZf41BeIQnLC8B2"
    });

    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "receipt#1",
        payment_capture: 1
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log("Razorpay order response:", response);

        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).send("Internal server error");
    }
});

app.get("/payment/:paymentId", async (req, res) => {
    const { paymentId } = req.params;

    const razorpay = new Razorpay({
        key_id: "rzp_test_XnEiyGAi048Iub",
        key_secret: "jziMLAbN8SZf41BeIQnLC8B2"
    });

    try {
        const payment = await razorpay.payments.fetch(paymentId);

        if (!payment) {
            return res.status(500).json("Error at Razorpay loading");
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        });
    } catch (error) {
        console.error("Failed to fetch payment:", error);
        res.status(500).json("Failed to fetch");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
