const express = require('express')

    const app = express()
    const port = 2323

    app.get('/Kopi latte',(req,res) =>{
        res.send("Ini kopi latte ")
    })
    app.get('/Kopi Mochacino',(req,res) =>{
        res.send("Ini kopi Mochacino ")
    })
    app.get('/Kopi Espresso',(req,res) =>{
        res.send("Ini Kopi Espresso")
    })

    app.listen(port,() => console.log(`Server running on port ${port}`))