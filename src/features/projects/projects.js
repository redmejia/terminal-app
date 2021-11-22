import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../API/Api";


// single project
export const getProjectById = createAsyncThunk(
	'projects/fetchProjectById',
	async (proid,  thunkAPI) => {
		const resp = await Api.fetchProjectByProID(proid)
		return resp
	}
)

// retrive all top projects
export const getAllTopProjects = createAsyncThunk(
	'projects/fetchTopProjects',
	async () =>{
		const resp = await Api.fetchTopProjects()
		return resp
	}
)

// retrive all projects
export const getAllProjects = createAsyncThunk(
	'projects/fetchAllProjects',
	async (thunkAPI) => {
		const resp = await Api.fetchAll()
		return resp
	}
)

// create a new project
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
		project : {},
		pending: false,
		created: false,
	},
	reducers: {},

	extraReducers: {
		// get a single project
		[getProjectById.pending]: (state) =>{
			state.pending = true
		},
		[getProjectById.fulfilled] : (state, action) =>{
			state.pending = false
			state.project = action.payload
		},
		

		// retrive all top projects
		[getAllTopProjects.pending] : (state) =>{
			state.pending = true
		},
		[getAllTopProjects.fulfilled] : (state, action) =>{
			state.pending = false
			state.projects = action.payload
		},


		
		// retrive all projects
		[getAllProjects.pending]: (state) => {
			state.pending = true
		},

		[getAllProjects.fulfilled]: (state, action) => {
			state.pending = false
			state.projects = action.payload
		},
		// [getAllProjects.rejected] : (state) =>{
		// 	state.pending = false
		// }



		// new project
		[createProject.pending]: (state) => {
			state.created = false
		},
		[createProject.fulfilled]: (state, action) => {
			state.created = true
			state.projects.push(action.payload)
		}

	},
})

export default projectSlice.reducer

