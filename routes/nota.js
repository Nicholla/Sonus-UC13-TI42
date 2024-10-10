const express = require('express')
const router = express.Router()

/////////////////////////////////////////////////////////////////////////

const cnota = require('../controllers/nota')

router.post('/create', cnota.estatic_create)


router.get( '/all', cnota.all_estatic )


router.get( '/busc/:id', cnota.busc_estatic )


router.put( '/busc_bd/:id', cnota.busc_estatic_body )


router.delete('/delete/:id', cnota.delete_user)


module.exports = router

/////////////////////////////////////////////////////////////////////////
