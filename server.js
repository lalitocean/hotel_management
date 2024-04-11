import express from "express"
import bodyParser from "body-parser";
import connectDB from "./db.js";
import userRoutes from './routes/userRoutes.js'
import menuRoutes from './routes/menuRoutes.js'

const app = express();

const mongoURL = "mongodb://127.0.0.1:27017/hotels";
connectDB(mongoURL);

//~ body parser middleware 
app.use(bodyParser.json());

app.use('/api/v1/person', userRoutes)
app.use('/api/v1/menu', menuRoutes)



//  & get api to home page 
app.get("/", (req, res) => {
    res.send(
        "welcome to the hotel "
    )
})





// & listening the port 3000
app.listen(3000, () => {
    console.log("server is listening on port 3000")
})