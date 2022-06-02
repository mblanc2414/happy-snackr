const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snackingSchema = new Schema(
	{
		name: String,
	},
	{
		timestamps: true,
	}
);

const Snacking = mongoose.model("Snacking", snackingSchema);

module.exports = Snacking;