const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache: true
})

server.get("/", function(req, res){

    let recipesFiltered = []

    for( let i = 0; i < 6; i++){
        recipesFiltered.push(pages[i])
    }
    
    return res.render("home", {items: recipesFiltered})
})

server.get("/about", function(req, res) {
    return res.render("about", {items: pages})
})

server.get("/recipes", function(req, res){

    let recipesFiltered = []

    const all = pages.length

    for( let i = 0; i < all; i++){
        const obj = pages[i]
        obj.index = i
        recipesFiltered.push(obj)
    }

    return res.render("recipes", {items: recipesFiltered})
})


server.get("/recipes/:index", function (req, res) {
    const { index: recipeIndex } = req.params

    const recipe = pages[recipeIndex]

    if(!recipe) return res.send("recipt nor found")

    return res.render("recipe", {item: recipe})
})


server.listen(5000, function(){
    console.log("server is running")
})