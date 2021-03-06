const express = require("express");
const router = express.Router();
const Snack = require("../models/snacks");
// index
router.get("/", (req, res) => {
	Snack.find({}, (err, foundSnacks) => {
		res.render("snacks/index.ejs", {
			snacks: foundSnacks,
		});
	});
});
// create
router.post("/", (req, res) => {
	Snack.create(req.body, (err, createdSnack) => {
		res.redirect("/snacks");
	});
});
// new
router.get("/new", (req, res) => {
	res.render("snacks/new.ejs");
});
// edit
router.get("/:id/edit", (req, res) => {
	Snack.findById(req.params.id, (err, foundSnack) => {
		res.render("snacks/edit.ejs", {
			snack: foundSnack,
		});
	});
});
// show
router.get("/:id", (req, res) => {
	Snack.findById(req.params.id, (err, foundSnack) => {
		res.render("snacks/show.ejs", {
			snack: foundSnack,
		});
	});
});
// update
router.put("/:id", (req, res) => {
	Snack.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect("/snacks");
	});
});
// delete
router.delete("/:id", (req, res) => {
	Snack.findByIdAndRemove(req.params.id, () => {
		res.redirect("/snacks");
	});
});

module.exports = router;
