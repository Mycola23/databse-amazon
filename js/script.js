const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const products = [
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
        img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: "Basketball ball",
        rating: {
            stars: 4.5,
            count: 56,
        },
        priceCents: 5035,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
        img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Gravel",
        rating: {
            stars: 4.7,
            count: 135,
        },
        priceCents: 67790,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c9",
        img: "https://plus.unsplash.com/premium_photo-1684952850099-396e7183bc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
        name: "White socks with rainbow lines",
        rating: {
            stars: 4.0,
            count: 215,
        },
        priceCents: 985,
    },
];

app.get("/js/data", (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
