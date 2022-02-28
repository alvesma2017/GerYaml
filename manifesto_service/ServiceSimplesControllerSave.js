const express = require("express")
const router = express.Router()

router.post("/manifesto_service",(req,res)=>{

    var sapiversion = req.body.sapiversion
    var skind = req.body.skind
    var sapp = req.body.sapp
    var sname = req.body.sname
    var snamespace = req.body.snamespace
    var stype = req.body.stype
    var nport = req.body.nport
    var port = req.body.port
    var tport = req.body.tport
    var ssapp = req.body.ssapp

    res.render("geraservice",{

        sapiversion: sapiversion,
        skind: skind,
        sapp: req.body.sapp,
        sname: req.body.sname,
        snamespace: snamespace,
        stype: stype,
        nport: nport,
        port: port,
        tport: tport,
        ssapp: ssapp

    })

})
module.exports = router