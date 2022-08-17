import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./models/Users.js";


const app = express();



mongoose.connect("mongodb+srv://PlatenPrime:wwwwww@cluster0.grh4vdx.mongodb.net/PedroMern?retryWrites=true&w=majority")




app.get("/getUsers", (req, res) => {
	UserModel.find({}, (err, result) => {
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
})





app.listen(3001, () => {
	console.log("Server runs perfectly!");
})