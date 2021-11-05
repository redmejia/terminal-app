import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: 'projects',
	initialState: { projects: [], isLoad: false, isNotLoad: false },

	reducers: {
		loadProject: (state) => {
			state.isLoad = true
		},
		loadNOTProject: (state) => {
			state.isNotLoad = true
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

const { getProjects, createNewProject, clearProjectState, loadProject, loadNOTProject } = projectSlice.actions

export const getAllProjects = () => {
	return async (dispatch) => {
		let resp = await fetch('http://127.0.0.1:8080/project', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const projects = await resp.json()
		if (resp.status === 200) {
			// dispatch(loadProject())
			dispatch(getProjects(projects))
		} else if (resp.status !== 200 || !resp.ok) {

			dispatch(loadNOTProject())
		}

	}
}

export const createProject = (project) => {
	return async (dispatch) => {
		const resp = await fetch('http://127.0.0.1:8080/project', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(project)
		})
		dispatch(createNewProject(project))
		if (resp.ok) {
			console.log("project was created.");
		}
	}
}

export const logOutClearProjects = () => {
	return (dispatch) => {
		dispatch(clearProjectState())
	}
}
