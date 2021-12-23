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

app.use(cors())
app.set('view-engine','ejs')
app.use(bodyParser.json());
app.use(express.urlencoded( { extended:false } ))
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

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

app.post('/login', (req, res, next) => {
    const auth = passport.authenticate('local', (err, user, info) => {
      if (err) return next(err)
      if (!user) return res.status(401).json(info)
      req.logIn(user, (error) => {
        if (error) return next(error)
        return res.json({msg: "Logged in successfully", ...user})
      })
    })
    auth(req, res, next)
  })

//  ------------------------------------ REGISTRATION --------------------------------------*

const users = require('./database/users.json')

app.post('/register', async (req,res) => {
    const dataUsers = users
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        dataUsers.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.json({msg:'Successful registration'})
        fs.writeFileSync("./database/users.json", JSON.stringify(dataUsers, null, 2));
    } catch {
        res.json({msg: 'Something went wrong please try again'})
    }
})

// ---------------------------------------- LOGOUT -------------------------------- 

app.delete('/logout', (req,res) => {
    req.logOut()
    res.send('logged out')
})

app.listen(5000)