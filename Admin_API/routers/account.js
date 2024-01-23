const { addAccount } = require('../controllers/accountController');

const router = require('express').Router();

//ADD ACCOUNT
router.post('/', addAccount);


module.exports = router;