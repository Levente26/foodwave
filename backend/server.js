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

//  ------------------------------------ REGISTRATION --------------------------------------------*

const users = require('./database/users.json')

app.post('/register', async (req,res) => {
  console.log("REGISTER TRIGGERED")
  const dataUsers = users;

  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const newUser = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };

  let existanceCheckName = false
  dataUsers.map(user => {
    if (user.name === req.body.name) {
      return (existanceCheckName = true)
    }
  });
  let existanceCheckEmail = false
  dataUsers.map(user => {
    if (user.email === req.body.email) {
      return (existanceCheckEmail = true)
    }
  })

  if (existanceCheckName) {
    res.status(400).json({msg: "Username alredy exists please choose another one"})
  } else if(existanceCheckEmail){
    res.status(400).json({msg: "Email address alredy exists please choose another one"})
  } else {
    dataUsers.push(newUser);
    fs.writeFileSync("./database/users.json", JSON.stringify(dataUsers, null, 2));
    res.status(201).json({msg: "Registration successfully completed.", name: newUser.name})
  }
})

// -------------------------------------- CART --------------------------------------------

let cart = require('./database/cart.json')

app.get('/cartitems/:id', (req,res) => {
  const cartItems = cart.filter(item => item.name == req.params.id)
  res.json(cartItems)
})

app.post('/cart', async (req,res) => {
  const cartData = cart
  let id
  try {
    id = cartData.reduce((a, b) => (a.id > b.id ? a : b)).id + 1
  } catch {
    id = 1
  };
  try {
    cartData.push({
      id: id,
      name: req.body.name,
      resturant: req.body.resturant,
      product: req.body.product,
      price: req.body.price,
    })
    fs.writeFileSync("./database/cart.json", JSON.stringify(cartData,null,2))
    res.status(200).json({ ...cartData})
  } catch{ } 
})

app.delete('/cartdelete/:id', (req,res) => {
  cart = cart.filter(item => item.id != req.params.id)
})

// ------------------------------------- LOGOUT ----------------------------------------------- 

app.delete('/logout', (req,res) => {
  req.logOut()
  res.send('logged out')
})

// ------------------------------------- ORDER ------------------------------------------------

const order = require('./database/order.json')

app.post('/order', (req,res) => {
  const data = order

  let id
  try {
    id = data.reduce((a, b) => (a.id > b.id ? a : b)).id + 1
  } catch {
    id = 1
  }
  try {
    data.push({
      id: id,
      name: req.body.name,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      payment: req.body.payment,
      resturant: req.body.resturant,
      products: req.body.products
    })
    fs.writeFileSync("./database/order.json", JSON.stringify(data,null,2))
    res.status(200).json({msg: 'Successful order', ...data})
  } catch { 
    res.json({msg: 'Something went wrong, please try again'})
  }
})

app.listen(5000)