import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

// Load variables
dotenv.config();

// Start Server
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
// Success
app.get("/success", (req, res) => {
  res.sendFile("success.html", { root: "public" });
});
// Cancel
app.get("/cancel", (req, res) => {
  res.sendFile("cancel.html", { root: "public" });
});
// Stripe
let stripeGateway = stripe(process.env.stripe_api);
let DOMAIN = process.env.DOMAIN;

app.post("/stripe-checkout", async (req, res) => {
  const lineItems = req.body.items.map((item) => {
    const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, "") * 100);
    console.log("item-price:", item.price);
    console.log("unitAmount:", unitAmount);
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.productImg],
        },
        unit_amount: unitAmount,
      },
      quantity: item.quantity,
    };
  });
  console.log("lineItems:", lineItems);

  //   Create Checkout Session
  const session = await stripeGateway.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/cancel`,
    line_items: lineItems,
    // Asking Address In Stripe Checkout Page
    billing_address_collection: "required",
  });
  res.json(session.url);
});

app.listen(3000, () => {
  console.log("listening on port 3000;");
});


// Sample data - Replace this with your database or data store
let products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 }
];

app.use(bodyParser.json());

// GET all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// GET a single product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

// POST a new product
app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update an existing product
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const product = products.find(product => product.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.price = price;

    res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.json({ message: 'Product deleted successfully' });
});


