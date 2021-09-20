const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 9000;

app.use(express.json());
app.use(morgan('dev'))

app.use("/parts", require("./routing/partsRouter"));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

