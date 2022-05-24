const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3002

router.get('/', (req, res)=> {
    res.json ({
        'All Keychains': `http://localhost:${PORT}/api/keychain`
    })
})

router.use('/keychain', require('./api/keychainRoutes'))

module.exports = router