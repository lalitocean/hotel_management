import express from "express"
const router = express.Router();
import menuItem from "../models/menu.model.js";

// ^ post api to send the menu data to the backend
router.post("/", async (req, res) => {
    try {
        const data = await req.body;
        const newMenu = new menuItem(data);
        const response = await newMenu.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({ error: "internal server error " });
    }
})
// ^ get api to get the menu data from  the backend 
router.get("/", async (req, res) => {
    try {
        const data = await menuItem.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error: "internal server error getting time " });
    }
})

export default router