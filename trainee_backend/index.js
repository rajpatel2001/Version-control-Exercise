const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users": ["Raj","Rajan","kishan","Nilay","Yash","Jenny","Kavya","Preyash"]})
})

app.listen(5000, ()=> {console.log("server started on port 5000")})
