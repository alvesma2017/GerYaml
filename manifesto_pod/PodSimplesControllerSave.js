const express = require("express")
const router = express.Router()

router.post("/manifesto_pod",(req,res) => {

    var apiversion = req.body.apiversion
    var kind = req.body.kind
    var name = req.body.name
    var imag = req.body.imag
    var nimag = req.body.nimag
    var cport = req.body.cport
    var ncont = req.body.ncont
    var prot = req.body.prot
  

    //res.send("Dados salvos:" + titulo + " " + descricao)
    res.render("gerapod",{
        apiversion: apiversion,
        kind: kind,
        name: name,
        imag: imag,
        nimag: nimag,
        cport: cport,
        ncont: ncont,
        prot: prot
    })

})

module.exports = router