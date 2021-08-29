const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

let bounties = [];

app.get('/bounty', (req, res) => {
    res.json(bounties);
});

app.post('/bounty', (req, res) => {
    bounties.push({id: uuidv4(), first: req.body.first, last: req.body.last, living: req.body.living, bounty: req.body.bounty, type: req.body.type});
    res.send("Bounty has been uploaded.");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
