const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const manifestopodsimples = require("./manifesto_pod/PodSimplesController")
const manifestoservicesimples = require("./manifesto_service/ServiceSimplesController")



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

    app.use("/", manifestoservicesimples)


app.listen(3000,()=>{console.log("servidor ok")
})


