import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../API/Api";



export const devSignin = createAsyncThunk(
	'developers/signin',
	async (devo) => {
		const resp = await Api.signin(devo)
		return resp
	}
)

export const devRegister = createAsyncThunk(
	'developers/register',
	async (devo) => {
		const resp = Api.register(devo)
		return resp
	}
)


const userSlice = createSlice({
	name: 'developers',
	initialState: {
		developer: {
			signin: false,
			dev: "",
			dev_id: 0,
		},
		pending: false
	},

	reducers: {
		developerRegister: (state, action) => {
			state.pending = true
			state.developer = action.payload
		},

		developerSignin: (state, action) => {
			state.pending = true
			state.developer = action.payload
		},

		developerLogout: (state) => {
			state.developer.signin = false
			state.developer.dev = ""
			state.developer.dev_id = 0
		},

	},

	extraReducers: (builder) => {
		// auth
		builder.addCase(devSignin.pending, (state) => {
			state.pending = true
		})
		builder.addCase(devSignin.fulfilled, (state, action) => {
			state.pending = false
			state.developer = action.payload
		})

		builder.addCase(devRegister.pending, (state)=>{
			state.pending = true
		})

		builder.addCase(devRegister.fulfilled, (state, action)=>{
			state.pending = false
			state.developer = action.payload
		})

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