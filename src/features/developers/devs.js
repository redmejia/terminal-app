import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'developers',
	initialState: {
		register: {
			signin: false,
			dev: "",
			dev_id: 0,
		}
	},

	reducers: {
		isRegister: (state, action) => {
			state.register = action.payload
		}
	}
})

export default userSlice.reducer

const { isRegister } = userSlice.actions

export const newRegister = (developer) => {
	return (dispatch) => {
		return fetch("http://127.0.0.1:8080/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developer)
		})
			.then(res => res.json())
			.then(data => {
				dispatch(isRegister(data))
			})
	}
}