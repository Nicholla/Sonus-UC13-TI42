const express = require('express')
const router = express.Router()

const calbum = require ("../controllers/album")



router.post( '/create', calbum.create_album )



router.get( "/read", calbum.read_album )



router.get( '/show/:id', calbum.show_album )


router.put( '/update/:id', calbum.update_album )



router.delete( '/delete/:id', calbum.delete_album )

module.exports = router