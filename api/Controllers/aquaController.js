const Data = require("../models/aquaModel");
const axios = require("axios");

const BlynkToken = process.env.BLYNKTOKEN;

const fetchData = async () => {
    try {
        const response1 = await axios.get(`https://blynk.cloud/external/api/get?token=${BlynkToken}&v5`);
        const data1 = response1.data;

        const response2 = await axios.get(`https://blynk.cloud/external/api/get?token=${BlynkToken}&v6`);
        const data2 = response2.data;

        // Formatting time
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: time });

        const newData = new Data({
            Temperature: data1,
            PH: data2,
            time: formattedTime,
        });

        await newData.save();

    } catch (error) {
        console.log("Error Fetching Data: ", error);
        throw new Error("Error Fetching Data");
    }
};

const saveToDB = async (req, res) => {
    try {
        setInterval(async () => {
            await fetchData();
        }, 10000);
        console.log("Data Saved");
        res.status(200).json({ message: "Data Saved to MongoDB", data: Data });
    } catch (error) {
        console.log("Error Saving Data to MongoDB: ", error);
        res.status(500).json({ message: "Error Saving Data to MongoDB", error: error });
    }
};

module.exports = { saveToDB };