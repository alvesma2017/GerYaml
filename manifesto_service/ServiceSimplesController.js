const express = require("express")
const router = express.Router()

router.get("/manifesto_service",(req,res) => {

    res.render("geraryaml_service")

})
module.exports = router