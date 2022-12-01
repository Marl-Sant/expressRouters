const express = require('express');

const router = express.Router();

router.get("/", (req, res)=> {
    res.json({
        "color": "Red"
    })
})

router.get("/:name", (req, res) => {
    console.log("I'm working! COLOR ROUTER")
    res.json(req.params.name)
})

module.exports = router
