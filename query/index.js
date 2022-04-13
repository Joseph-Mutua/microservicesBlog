const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors)

app.get("/posts", (req, res) => {

})

app.post("/posts", (req, res) => {

});

app.listen(4002, (req, res) => {
    console.log("Listening on port 4002")
})