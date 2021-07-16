const express = require('express')
const path = require('path')

const socketio = require('socket.io')

const app = express()

// Templat engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'apps', 'views'))
// app.set('views',__dirname + '/apps/views');
// Static File
app.use(express.static(path.join(__dirname,'public')))


// Lay form Data
app.use(
    express.urlencoded({
        extended: true,
    }),
); // gui duoi dang form HTML

app.use(express.json()) // gui duoi dang code JavaScript

const controller = require('./apps/controllers')

app.use(controller)


const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})

const io = socketio(server)

const socketcontrol = require('./apps/common/socketcontrol')(io)
