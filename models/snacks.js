const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snackSchema = new Schema(
	{
		name: String,
	},
	{
		timestamps: true,
	}
);

const Snack = mongoose.model("Snack", snackSchema);

module.exports = Snack;