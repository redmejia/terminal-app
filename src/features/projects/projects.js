import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: 'projects',
	initialState: { projects: [], isLoaded: false },

	reducers: {
		loadProject: (state) => {
			state.isLoad = true
		},
		getProjects: (state, action) => {
			state.projects = action.payload
		},
		createNewProject: (state, action) => {
			return [state.projects, { ...action.payload }]
		},
		clearProjectState: (state) => {
			state.projects = []
		}

	}
})

export default projectSlice.reducer

const { getProjects, createNewProject, clearProjectState, loadProject } = projectSlice.actions

export const getAllProjects = () => {
	return async (dispatch) => {
		let resp = await fetch('http://127.0.0.1:8080/project', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const projects = await resp.json()
		if (!resp.ok) {
			dispatch(loadProject())
		} else if (resp.status === 200) {

			dispatch(getProjects(projects))
		}


	}
}

export const createProject = (project) => {
	return (dispatch) => {
		fetch('http://127.0.0.1:8080/project', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(project)
		})
		dispatch(createNewProject(project))
	}
}

export const logOutClearProjects = () => {
	return (dispatch) => {
		dispatch(clearProjectState())
	}
}
