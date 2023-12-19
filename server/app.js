const express = require('express');
const app = express();
const cors = require('cors'); //frontend and backend are on different ports therefore we need cors for cross origin resource sharing
const stripe = require('stripe')('sk_test_51OP1apCFHl4P44p8x3StWcJiQADnq8u44ODy5zJysuGcJ80Ww1lQiR1ixmC3errmkYNggkMBEWLSSPP5qWivn26t00aXeh0WjN')
//while creating stripe accout , select us as country (for india , the indian gvt has implemented many rules and regulations for online payments)

app.use(cors());
app.use(express.json()); //parse json data

app.post("/api/payment", async (req, res) => {
    const {placedProducts} = req.body;
    const lineItems = placedProducts.map((p)=>({
        price_data:{
            currency: "inr",
            product_data:{
                name: p.name
            },
            unit_amount: p.price * 100,
        },
        quantity: p.quantity
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/failure"
    })
    res.json({id: session.id})
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
})

