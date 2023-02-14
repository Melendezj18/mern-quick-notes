const express = require('express')
const router = express.Router()

const notesCtrl = require('../../controllers/api/note')

router.post('/', notesCtrl.create)
router.post('/', notesCtrl.read)


module.exports = router