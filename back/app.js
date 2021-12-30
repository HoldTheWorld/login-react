require('dotenv').config()
const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const session = require('express-session')
const FileStore = require('session-file-store')(session)
// const indexRouter = require('./src/routes/index.router')



const PORT =  3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(process.env.PWD, 'public')))

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'sid', // ключ куки
  secret: 'gchjtghjkl;bjkll', 
  resave: false, 
  saveUninitialized: false, 
  httpOnly: true, 
  cookie: { expires: 24 * 60 * 60e3 },
}
app.use(session(sessionConfig)) 


app.use(cors({
  origin: true,
  credentials: true,
}));

// app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`started at ${PORT}`)
})
