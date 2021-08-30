const express = require("express")
const bountyRouter= express.Router()
const {v4: uuidv4 }= require ('uuid');



const bounties = [
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
       living: false,
        type: "Jedi",
        reward: "3000000",
        _id: uuidv4()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        type: "Jedi",
        reward: "30000",
        _id: uuidv4()
    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
       living: false,
       type: "sith",
        reward: "10000",
        _id: uuidv4()
    }
];


bountyRouter.route("/")

    .get((req, res) => {
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`You added ${newBounty.firstName } to the database!`)
    })

bountyRouter.route('/:bountyId')

    .get((req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

    .put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send("updated")
})

    .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)    
    bounties.splice(bountyIndex, 1)
    res.send("deleted ")
})


module.exports = bountyRouter