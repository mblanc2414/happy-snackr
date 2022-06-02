const express = require("express");
const router = express.Router();
const Snacking = require("../models/snacking.js");
// Routes
// I
router.get("/", (req, res) => {
	Snacking.find({}, (err, foundSnacking) => {
		res.render("snacking/index.ejs", {
			snacking: foundSnacking,
		});
	});
});
// N
router.get("/new", (req, res) => {
	res.render("snacking/new.ejs");
})
// C
router.post("/", (req, res) => {
    Snacking.create(req.body, (err, createdSnacking) => {
        res.redirect("/snacking");
    });
});
	// D
	router.delete("/:id", (req, res) => {
		Snacking.findByIdAndRemove(req.params.id, () => {
			res.redirect("/snacking");
		});
	});
	// U
	router.put("/:id", (req, res) => {
	    Snacking.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect("/snacking");
		});
	});
	

// E
router.get("/:id/edit", (req, res) => {
	Snacking.findById(req.params.id, (err, foundSnacking) => {
		res.render("snacking/edit.ejs", {
			snacking: foundSnacking,
		});
	});
});
// S
router.get("/:id", (req, res) => {
	Snacking.findById(req.params.id, (err, foundSnacking) => {
		res.render("snacking/show.ejs", {
			snacking: foundSnacking,
		});
	});
});
// Export
module.exports = router;