import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./models/Users.js";
import cors from "cors";


const app = express();


app.use(express.json());
app.use(cors());



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


app.post("/createUser", async (req, res) => {
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();

	res.json(user);

})





app.listen(3001, () => {
	console.log("Server runs perfectly!");
})