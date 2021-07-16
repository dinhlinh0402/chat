const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/tien-dien', (req, res) => {
    res.render('tien-dien')
})

router.get('/chat', (req, res) => {
    res.render('chat')
})


module.exports = router