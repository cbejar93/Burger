var Burger = require("../models/burger");

var express = require("express");

var router = express.Router()

router.get("/", function(req, res){
            Burger.all(function(data){
                var hbsObject = {
                        burger: data
                };
                console.log(hbsObject);
                res.render("index", hbsObject);
            })
    })

router.post("/api/burger", function(req, res){
        Burger.create([
            "burger_name", "devoured" 
        ][
            req.body.name, req.body.eat
        ], function(result){
            console.log("you did it!");
        })
    })

 router.put("/api/burger/:id", function(req,res){
    var burger = req.params.id; 

    Burger.update({
         devour: req.body.devour
     }, burger, function(result){
         if (result.changedRows === 0){
             return res.status(404).end();
         } else {
             res.status(200).end();
         }
     })
 })

 module.exports = router;
    
