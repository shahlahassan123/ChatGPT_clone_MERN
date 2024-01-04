import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv'

dotenv.config()



const app = express();

app.use(express.json());
app.use(cors());


const API_KEY = process.env.API_KEY;


app.post('/completions', async (req, res) => {
  

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify(req.body)
       
    };

    try {
        console.log("body", req.body)
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
       
        console.log("DATA send", data)
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.listen(9000, () => {
    console.log("Server listening");
});


