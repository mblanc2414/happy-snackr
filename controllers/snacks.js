const express = require('express');
const router = express.Router();
const Snack = require('../models/snacks.js' );
router.get('/', (req, res) => {
    res.render('snacks/index.ejs');
});

router.use(express.urlencoded({ extended: false }));

////////////////////// SEED ROUTE///////////////////////////////////
router.get('/seed', (req, res) => {
	Snack.deleteMany({}, (error, allSnacks) => {});

	Snack.create(allSnacks, (error, data) => {
		res.redirect('/snacks');
	});
});
// index
router.get('/', (req, res) => {
    Snack.find({}, (err, foundSnacks) => {
        res.render('snacks/index.ejs', {
            snacks: foundSnacks
        });
    })
});

// NEW
router.get('/new', (req, res) => {
    res.render('snacks/new.ejs');
});
// DELETE///
router.delete('/:id', (req, res) => {
    Snack.findByIdAndRemove(req.params.id, () => {
        res.redirect('/snacks');
    });
});
// UPDATE///

router.put('/:id', (req, res) => {
    Snack.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/snacks');
    });
});
// create route////
router.post('/', (req, res) => {
    Snack.create(req.body, (err, createdSnack) => {
        res.redirect('/snacks');
    });
});
// EDIT///
router.get('/:id/edit', (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        res.render('snacks/edit.ejs', {
            snack: foundSnack
        });
    });
});
// SHOW /////
//avoid this handling /new by placing it towards the bottom of the file
router.get('/:id', (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        res.render('snacks/show.ejs', {
            snack: foundSnack
        });
    });
});


module.exports = router;