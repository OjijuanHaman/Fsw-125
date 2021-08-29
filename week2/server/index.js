const express = require("express")

const app = express();

const PORT = 3000

app.get('/movies', (req, res) => {
    res.send(
        [{
            "movie": "Fast 5"},{
            "movie": "Beautiful Mind"},{
            "movie": "Big Daddy"
        }]
    )
});

app.get('/shows', (req, res) => {
    res.json(
        [{
            "show": "Punisher"},{
            "show": "Chicago PD"},{
            "show": "Law and Order"
        }]
    )
});

app.get('/motorcycles', (req, res) => {
    res.json(
        [{
            "bike": "Ninja400F"},{
            "bike": "YzFR7"},{
            "bike": "V-Rod"
        }]
    )
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});