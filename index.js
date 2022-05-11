const express = require ('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Coin = require ('./models/Coin')

//config 
    //template engine
    app.engine('handlebars', handlebars.engine({defaultlayout:'main'})) // novas versões do handlebars necessitam do acrescimo do ".engine" antes de declarar a função para funcionar.
    app.set('view engine', 'handlebars') // defininfo defoutltlayout como main, poderão ser feito incrementos em HTML(nesse caso) não será necessário chamar toda a estrutura html.
  
    // ja foi ultilizado bopdy parser nessa ocasião mas atualmente o exprees ja resolve 
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    
//ROTAS 
    app.get('/deletar/:id',function(req,res){
        Coin.destroy({where:{'id': req.params.id}}).then(function(){
            res.send('Deleted') 
        }).catch(function(erro){
            res.send('Faild'+erro)
        })
    })
    app.get('/', function(req,res){
        Coin.findAll().then(function(coins){ // função .all substituida por .findAll
            res.render('home',{coins: coins})// chamando renderização do arquivo 'home.handlebars'
        }) 
    })
    app.get('/cad', function(req,res){
        res.render('formulario') // chamando a renderização do arquivo formulario.handlebanders
    })
    app.post('/comprar' ,function(req,res){
        Coin.create({
            exchange: req.body.exchange,
            crypto: req.body.crypto,
            cryptoUND: req.body.cryptoUND,
            USDT: req.body.USDT
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('faild' + erro)
        }) 
    })

app.listen('3001', function(){
    console.log('servidor rodando na porta 3001')
})