import { express } from "express";
import {ProductManager} from "../productManager.js"

export const cartsRouter = express.Router();


cartsRouter.post("/", async(req, res) => {
    const data = req.body;
    const instanceManager = new ProductManager("./src/carts.json");
    const flagFound = await instanceManager.addCart(data);
    flagFound ? res.status(200).send('Product added successfully') : res.status(400).send('Error in uploaded data');
});


cartsRouter.get("/:cid", async (req, res) => {
    const instanceManager = new ProductManager("./src/carts.json");
    const viewCart = await instanceManager.getProducts();
    const { cid } = req.params;
    const idFound = viewCart.find(element => element.id == cid);
    idFound ?  res.status(200).send(idFound) : res.status(404).send('Not Found');

});
