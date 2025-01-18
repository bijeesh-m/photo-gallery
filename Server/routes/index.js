const express = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware.js');
const ctr = require('../controller/ctr.js');

const router =express.Router()

router.get('/', ctr.openView)

router.get('/getData', ctr.getData)

router.post('/save',uploadMiddleware.single('photo'), ctr.uploads )
router.delete('/remove/:id', ctr.remove )


module.exports = router