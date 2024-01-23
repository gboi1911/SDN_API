const {Account, Finance} = require('../modules/module');

const AccountController = {
    addAccount: async (req, res) => {
        // res.status(200).json(req.body);
        try {
            const newAccount = new Account(req.body);
            const savedAccount = await newAccount.save();
            res.status(200).json(savedAccount);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = AccountController;