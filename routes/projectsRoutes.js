const express = require("express")
const router = express.Router()


router.route("/").get((req, res)=>{
    res.send("Get request sended")
})
router.route("/:id").put((req,res)=>{
    res.send("Put request sended")
})

module.exports = router;