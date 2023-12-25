const mongoose = require('mongoose') //library for MongoDB access
mongoose.set('strictQuery', false)

//function to connect to MongoDB
const connectDB = async () => {
    try {
        //try to connect to MongoDB
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(error)
        console.log('Error connecting to MongoDB')
    }
}

module.exports = connectDB