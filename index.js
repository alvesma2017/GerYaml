const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const manifestopodsimples = require("./manifesto_pod/PodSimplesController")
const manifestopodsimplessave = require("./manifesto_pod/PodSimplesControllerSave")
const manifestoservicesimples = require("./manifesto_service/ServiceSimplesController")
const manifestoservicesimplessave = require("./manifesto_service/ServiceSimplesControllerSave")


//setando a engine EJS para uso
app.set('view engine','ejs')
//definindo para usar arquivos estaticos, tipo: css
app.use(express.static('public'))
//definindo para usar o body-parser
app.use(bodyparser.urlencoded({extended: false}))
//definindo para usar o body-parser em JSON
app.use(bodyparser.json())

app.get("/",(req,res) => {

    res.render("index")

})

    app.use("/", manifestopodsimples)

    app.use("/", manifestopodsimplessave)

    app.use("/", manifestoservicesimples)

    app.use("/", manifestoservicesimplessave)



// app.get("/geraryaml_service",(req,res) => {

//     res.render("geraryaml_service")

// })

app.post("/geraservice",(req,res)=>{

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

app.listen(3000,()=>{console.log("servidor ok")
})


