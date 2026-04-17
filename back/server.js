import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend online 🚀");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "API funziona 🔥" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server attivo su porta " + PORT);
});

// update backend