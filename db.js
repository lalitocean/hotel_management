import mongoose from "mongoose";
const connectDB = async (mongoURL) => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongodb Connected...');
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB