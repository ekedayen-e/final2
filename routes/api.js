const express = require('express');
const { isObjectIdOrHexString, default: mongoose } = require('mongoose');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId
const Entry = require("../models/model")
router.get('/', (req, res, next) => {
    Entry.find({}).then((data) => res.json(data))
    .catch(next);
});

router.get('/:id', (req, res) => {
    Entry.find({ id: mongoose.ObjectId(req.params.id)})
    .then((result) => res.json(result))
    .catch(next);
})


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