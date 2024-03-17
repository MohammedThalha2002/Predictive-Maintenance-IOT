const express = require("express");
const cors = require("cors");
// require("./config/db");
// const SensorModel = require("./models/SensorModel");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

let sensorData = {
  vibration: 0,
  rpm: 0,
  sound: 0,
  temperature: 0,
  voltage: 0,
  current: 0,
};

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.get("/show-data", (req, res) => {
  res.json({
    message: "SUCCESS",
    data: sensorData,
  });
});

app.post("/test", (req, res) => {
  try {
    sensorData = req.body;
    res.send("SUCCESS");
  } catch (error) {
    console.log("error");
    res.status(400).send("error");
  }
});

// app.post("/add-data", async (req, res) => {
//   const newData = req.body;
//   // updating the global ref
//   sensorData = newData;
//   try {
//     const sensorData = await SensorModel.findOne();

//     // adding the new data
//     sensorData.vibration.push(newData.vibration);
//     sensorData.rpm.push(newData.rpm);
//     sensorData.sound.push(newData.sound);
//     sensorData.temperature.push(newData.temperature);
//     sensorData.voltage.push(newData.voltage);
//     sensorData.current.push(newData.current);

//     // shifting if it has more data than
//     if (sensorData.vibration.length > 1) sensorData.vibration.shift();
//     if (sensorData.rpm.length > 1) sensorData.rpm.shift();
//     if (sensorData.sound.length > 1) sensorData.sound.shift();
//     if (sensorData.temperature.length > 1) sensorData.temperature.shift();
//     if (sensorData.voltage.length > 1) sensorData.voltage.shift();
//     if (sensorData.current.length > 1) sensorData.current.shift();

//     // updating the database
//     await SensorModel.updateOne({}, sensorData);
//     res.send("sensorData updated");
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// });

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});
