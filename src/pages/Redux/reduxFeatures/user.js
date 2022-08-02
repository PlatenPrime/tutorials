import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
	name: "user",
	initialState: { value: { name: "Platen", age: 29, email: "proshta@gmail.com" } },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
	},
});


export default userSlice.reducer;