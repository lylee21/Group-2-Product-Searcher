const Joi = require("joi");
const express = require("express");
const get_product_list = require("./bootstrap.js");
const app = express();
app.use(express.json());
//get all products
const products = get_product_list();

//validation function
function validate_product(product) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
    });
    return schema.validate({ name: product });
}

//-------------------------------ROUTES---------------------------------------
//another all products
app.get("/api/products", (req, res) => {
    res.send(products);
});

//another products by id
app.get("/api/products", (req, res) => {
    var response = [];
    if (typeof req.query.name != "undefined") {
        products.filter((product) => {
            if (product.name.toLocaleLowerCase().includes(req.query.name)) {
                response.push(product);
            }
        });
    }

    // this would usually adjust your database query
    if (typeof req.query.id != "undefined") {
        products.filter((product) => {
            if (product.id == req.query.id) {
                response.push(product);
            }
        });
    }

    // de-duplication:
    response = _.uniqBy(response, "id");

    // in case no filtering has been applied, respond with all stores
    if (Object.keys(req.query).length === 0) {
        response = products;
    }
    res.send(response);
});

//post products
app.post("/api/products", (req, res) => {
    const { value, error } = validate_product(req.body.name);
    if (error) return res.status(400).send(error.details[0].message);
    const product = {
        id: products.length + 1,
        name: req.body.name,
    };
    products.push(product);
    res.send(product);
});

//update products
app.put("/api/products/:id", (req, res) => {
    //look up the product first
    const product = products.find((c) => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send("The product ID is not found.");

    //validate the product
    const { value, error } = validate_product(req.body.name);
    if (error) return res.status(400).send(error.details[0].message);

    //update the product
    product.name = req.body.name;
    res.send(product);
});

app.delete("/api/products/:id", (req, res) => {
    const product = products.find((c) => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send("The product ID is not found.");
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);
});
//-------------------------------ROUTES---------------------------------------

// read environment PORT number
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
