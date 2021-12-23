if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const cors = require('cors')
const bodyParser = require("body-parser");
const fs = require('fs')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

app.use(cors())
app.set('view-engine','ejs')
app.use(bodyParser.json());
app.use(express.urlencoded({ extended:false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// ---------------------------------------- LOGIN ---------------------------------------------------


app.post('/login', checkNotAuthenticated, passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}))

//  ------------------------------------ REGISTRATION --------------------------------------*

const users = require('./database/users.json')

app.post('/register', checkNotAuthenticated, async (req,res) => {
    const dataUsers = users
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        dataUsers.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.send('success')
        fs.writeFileSync("./database/users.json", JSON.stringify(dataUsers, null, 2));
    } catch {
        res.send('fail')
    }
})

// ---------------------------------------- LOGOUT -------------------------------- 

app.delete('/logout', (req,res) => {
    req.logOut()
    res.send('logged out')
})

function checkAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
function checkNotAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}

app.listen(5000)