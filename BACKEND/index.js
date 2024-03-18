import express from 'express';
import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyB0IPIrKRugmHUrgdspmcFZkButkKctHkQ",
    authDomain: "predictive-maintenance-4020e.firebaseapp.com",
    databaseURL: "https://predictive-maintenance-4020e-default-rtdb.firebaseio.com",
    projectId: "predictive-maintenance-4020e",
    storageBucket: "predictive-maintenance-4020e.appspot.com",
    messagingSenderId: "584970417111",
    appId: "1:584970417111:web:6fdae09ab92b0039fa1192"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db, 'sensor')

let sensorData = {
    vibration: 0,
    rpm: 0,
    sound: 0,
    temperature: 0,
    voltage: 0,
    current: 0,
};

onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    sensorData = data;
})


app.get('/', (req, res) => {
    res.send("RUNNING SUCESSFUL")
})

app.get('/data', (req, res) => {
    res.send(sensorData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})