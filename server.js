const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "sk_a370b6aa702e23d216e122b86c001c43";

app.post("/api", async (req, res) => {
  try {
    const { url } = req.body;

    const response = await fetch("https://xapiverse.com/api/terabox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xAPiverse-Key": API_KEY,
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("TeraBox API running");
});

app.listen(3000, () => console.log("Server running"));
