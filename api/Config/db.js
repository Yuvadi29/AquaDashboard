const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURL);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDB;