const express = require('express')
const router = express.Router();
const Entry = require("../models/model")
router.get('/', (req, res, next) => {
    Entry.find({}).then((data) => res.json(data))
    .catch(next);
});

router.post('/', (req, res, next) => {
    if(req.body) {
        Entry.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
        res.json({
            error: 'Re-enter entry'
        });
    }
});

router.delete('/:id', (req, res, next) => {
    Entry.findOneAndDelete({_id:req.params.id})
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router