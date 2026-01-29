import express from 'express';
import cors from 'cors';
import caesar from './utils.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/encrypt", (req, res) => {
    const { text = "", shift = 0 } = req.body || {};
    res.json({ result: caesar(text, shift) });
});


app.post("/api/decrypt", (req, res) => {
    const { text, shift } = req.body;
    const shiftedText = caesar(text, -shift);
    res.json({ result: shiftedText });
});

app.listen(3000, () => {
    console.log("Caesar cipher backend running on port 3000");
});