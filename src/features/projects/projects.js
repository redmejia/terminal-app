import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAll, createNewProject } from "../API/Api";



export const getAllProjects = createAsyncThunk(
	'projects/fetchAllProjects',
	async (thunkAPI) => {
		const resp = await fetchAll()
		return resp.json()
	}
)


export const createProject = createAsyncThunk(
	'projects/createNewProject',
	async (project, thunkAPI) =>{
		const resp = await createNewProject(project)
		return resp
	}

)


const projectSlice = createSlice({
	name: 'projects',
	initialState : {
		projects: [],
		loading: false,
		created : false,
	},

	reducers: {},

	extraReducers: {
		
		[getAllProjects.pending]: (state) => {
			state.loading = true
		},

		[getAllProjects.fulfilled]: (state, action) => {
			state.loading = false
			state.projects.push(action.payload)
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

