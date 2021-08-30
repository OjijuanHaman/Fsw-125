const express = require("express")
const app = express()


app.use(express.json())

app.use("/bounties", require("./bountyRouter.js"))

app.listen(3000, () => {
    console.log("This server is running on port 3000")
})