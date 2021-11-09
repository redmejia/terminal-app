import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../API/Api";



export const getAllProjects = createAsyncThunk(
	'projects/fetchAllProjects',
	async (thunkAPI) => {
		const resp = await Api.fetchAll()
		return resp
	}
)


export const createProject = createAsyncThunk(
	'projects/createNewProject',
	async (project, thunkAPI) => {
		const resp = await Api.createNewProject(project)
		return resp
	}

)


const projectSlice = createSlice({
	name: 'projects',
	initialState: {
		projects: [],
		loading: false,
		// created : false,
	},
	reducers: {},

	extraReducers:  {
		[getAllProjects.pending]: (state) => {
			state.loading = true
		},

		[getAllProjects.fulfilled]: (state, action) => {
			state.loading = false
			state.projects = action.payload
		},
		// [getAllProjects.rejected] : (state) =>{
		// 	state.loading = false
		// }

		[createProject.pending] : (state) => {
			state.created = false
		},
		[createProject.fulfilled] : (state, action) =>{
			state.created = true
			state.projects.push(action.payload)
		}

	},
})

export default projectSlice.reducer

// const { getProjects, createNewProject, clearProjectState } = projectSlice.actions




// export const getAllProjects = async (dispatch) => {
// 	let resp = await fetch('http://127.0.0.1:8080/project', {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 	const projects = await resp.json()
// 	if (resp.ok && resp.status === "200") {
// 		dispatch(getProjects(projects))

// 	}

// }

// export const createProject = (project) => {
// 	return async (dispatch) => {
// 		const resp = await fetch('http://127.0.0.1:8080/project', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(project)
// 		})
// 		dispatch(createNewProject(project))
// 		if (resp.ok) {
// 			console.log("project was created.");
// 		}
// 	}
// }

// export const logOutClearProjects = () => {
// 	return (dispatch) => {
// 		dispatch(clearProjectState())
// 	}
// }
