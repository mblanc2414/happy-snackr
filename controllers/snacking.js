const express = require("express");
const router = express.Router();
const Snack = require("../models/snacks.js");
// Routes
// I
router.get("/", (req, res) => {
	Snack.find({}, (err, foundSnacks) => {
		res.render("snacks/index.ejs", {
			snacks: foundSnacks,
		});
	});
});
// N
router.get("/new", (req, res) => {
	res.render("snacks/new.ejs");
})
	// D
	router.delete("/:id", (req, res) => {
		Snack.findByIdAndRemove(req.params.id, () => {
			res.redirect("/snacks");
		});
	});
	// U
	router.put("/:id", (req, res) => {
		Snack.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect("/snacks");
		});
	});
	// C
	router.post("/", (req, res) => {
		Snack.create(req.body, (err, createdSnack) => {
			res.redirect("/snacks");
		});
	});

// E
router.get("/:id/edit", (req, res) => {
	Snack.findById(req.params.id, (err, foundSnack) => {
		res.render("snacks/edit.ejs", {
			snack: foundSnack,
		});
	});
});
// S
router.get("/:id", (req, res) => {
	Snack.findById(req.params.id, (err, foundSnack) => {
		res.render("snacks/show.ejs", {
			snack: foundSnack,
		});
	});
});
// Export
module.exports = router;