const express  = require('express')
const app = express()

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended : false}))

app.get('/', function(req,res){
    res.render('sample.ejs')
})

app.get('/verified', function(req, res){
    res.render('verified.ejs')
})

app.get('/registration', function(req, res){
    res.render('Registration.ejs')
})

app.get('/login', function(req, res){
    res.render('login.ejs')
})

app.post('/registration', function(req, res){

    try{
    users.push({
        id : Date.now().toString(),
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    res.redirect('/login')
    }
    catch{
        res.redirect('/registration')
    }

})

app.post('/login', function(req, res){

    const email = req.body.email
    const pass = req.body.password
    var t = 0

   /* console.log(email+" "+pass)
    res.render('verified.ejs')*/


        for( i in users){

            if((i.email.toString() == email.toString())&&(i.password.toString() == pass.toString()))
            {
                t=1
                break
            }           
        }

        if(t==1)
            res.render('verified.ejs')

        else
        {   
            console.log(users) 
            console.log("Incorrect username or password");
            res.redirect('/login')
        }
            

})




app.listen(8000)