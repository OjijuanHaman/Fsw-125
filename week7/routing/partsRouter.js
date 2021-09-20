const express = require("express");
const partsRouter= express.Router();
const { v4: uuidv4 } = require('uuid');


const parts = [
    {
        name: "Brakes",
        condition: "New",
        fitment: "R3",
        quantity: 2,
        _id: uuidv4()
    },
    {
        name: "Front forks",
        condition: "Used",
        fitment: "Daytona",
        quantity: 1,
        _id: uuidv4()
    },
    {
        name: "Rear Fender",
        condition: "New",
        fitment: "Ninja 636",
        quantity: 1,
        _id: uuidv4()
    }
  ];

  partsRouter
    .get('/', (req, res, next) => {
        res.status(200).send(parts);
    }) //GET all
  

    .get('/:partId', (req, res, next) => {
        const partId = req.params.partId;
        const singlePart = parts.find(part => partId._id === partId);
        if (!singlePart) {
            const error = new Error("No Matching Criteria");
            return next(error);
          }
          res.status(200).send(singularPart);
        }) //GET one
      

    .get('search/_id', (req, res, next) => {
        const partId = req.query._id;
        const filteredPart = parts.filter(part => partId._id === partId);
        if (!filteredPart) {
            const error = new Error("No Matching Criteria");
            return next(error);
          }
          res.status(200).send(filteredPart);
        }) //GET by id

        .get('/search/type', (req, res, next) => {
            const type = req.query.type;
            console.log(type);
        
            if (!quantity) {
              const error = new Error("You must provide a valid quantity.");
              return next(error);
            }
            const filteredPart = parts.filter(part => part.type === type);
            res.status(200).send(filteredPart);
          }) //GET by type

    .post('/', (req, res, next) => {
        const newPart = req.body
        newPart._id = uuidv4()
        parts.push(newPart)
        
        res.status(201).send(newPart);
  }) //POST one


    .delete('/:partId', (req, res, next) => {
        const partId = req.params.partId;
        const partIdIndex = parts.findIndex(part => partId._id === partId);
        parts.splice(partIndex, 1);
        res.send("Resource successfully deleted!");
  }) //DELETE one


    .put('/:partId', (req, res, next) => {
        const partId = req.params.partId;
        const partIndex = parts.findIndex(part => partId._id === partId);
        Object.assign(parts[partIndex], req.body );
        res.status(201).send("Resource Successfully Updated!");
  }); //EDIT one
module.exports = partsRouter;