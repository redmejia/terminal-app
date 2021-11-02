import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'developers',
	initialState: {
		developer: {
			signin: false,
			dev: "",
			dev_id: 0,
		}
	},

	reducers: {
		developerRegister: (state, action) => {
			state.developer = action.payload
		},

		developerSignin: (state, action) => {
			state.developer = action.payload
		},

		developerLogout: (state) => {
			state.developer.signin = false
			state.developer.dev = ""
			state.developer.dev_id = 0
		}


	}
})

export default userSlice.reducer

const { developerRegister, developerSignin, developerLogout } = userSlice.actions

export const newRegister = (developer) => {
	return (dispatch) => {
		return fetch("http://127.0.0.1:8080/register", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developer)
		})
			.then(res => res.json())
			.then(data => {
				dispatch(developerRegister(data))
			})
	}
}

export const newSignin = (developer) => {
	return (dispatch) => {
		return fetch("http://127.0.0.1:8080/signin", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(developer)
		}).then(res => res.json())
			.then(data => {
				dispatch(developerSignin(data))
			})
	}
}

export const logOut = () => {
	return (dispatch) => {
		dispatch(developerLogout())
	}
}