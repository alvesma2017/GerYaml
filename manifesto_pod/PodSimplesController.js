const express = require("express")
const router = express.Router()

router.get('/manifesto_pod',(req,res)=>{

    res.render("geraryaml_pod")
})

module.exports = router