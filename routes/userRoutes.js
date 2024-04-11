import express from "express"
const router = express.Router();
import Person from "../models/user.model.js";

//  & post api to send the person data to  the backend 
router.post("/", async (req, res) => {
    try {
        const data = await req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({ error: "internal server error " });
    }
})

// & get the person data using get method 
router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error: "internal server error getting time " });
    }
})

// ! parameterized api to search a person by name 
router.get("/:workType", async (req, res) => {
    try {
        const response = req.params.workType
        if (response == "chef" || response == "waiter" || response == "manager") {
            const data = await Person.find({ work: response });
            console.log("data fetched ")
            res.status(200).json(data)
        } else {
            res.status(404).send("not found in the database ")
        }
    } catch (error) {
        res.status(500).send({ error: "internal server error getting time " });

    }
})


// ! update api 

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const response = await Person.findByIdAndUpdate(personid, updatedUser, {
            new: true, // * return the updated document 
            runValidators: true // * Run Mongoose validation 
        })

        // if (!response) {
        //     return res.status(404).json({ error: "person not found " })
        // }
        console.log("data updated ")
        res.status(200).json(response)

    } catch (error) {
        res.status(500).send({ error: "internal server error updating time " });

    }
})


// ! delete api 
router.delete("/:id", async (req, res) => {
    try {
        const personid = await req.params.id;
        const response = await Person.findByIdAndDelete(personid)
        res.status(201).json({ message: "successfully deleted" })
        // if (!response) {
        //     return res.status(404).json({ error: "person not found for deleting " })
        // }
    } catch (error) {
        res.status(500).send({ error: "internal server error deleting time " });

    }
})

export default router