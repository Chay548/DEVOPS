const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello jenkins");
});

app.listen(port, () => {
    console.log(`app listening to the port ${port}`);
});