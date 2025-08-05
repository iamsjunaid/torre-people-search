import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/genome/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const response = await fetch(
      `https://torre.ai/api/genome/bios/${username}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch genome" });
  }
});

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});
