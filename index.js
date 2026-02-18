const express = require("express");
const app = express();

app.use(express.json());

let serverData = { placeId: null, jobId: null };

app.post("/set-server", (req, res) => {
    const { placeId, jobId } = req.body;
    serverData.placeId = placeId;
    serverData.jobId = jobId;
    res.json({ status: "saved" });
});

app.get("/get-server", (req, res) => {
    res.json(serverData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
