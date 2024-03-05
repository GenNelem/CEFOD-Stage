// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data - Replace this with your database or data store
let products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 24.99 }
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
    const { name, description, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update an existing product
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, description, price } = req.body;
    const product = products.find(product => product.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.description = description;
    product.price = price;

    res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.json({ message: 'Product deleted successfully' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
