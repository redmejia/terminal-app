import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: 'projects',
	initialState: { projects: [], isLoading: true },

	reducers: {
		loadProject: (state, action) => {
			state.isLoading = false
		},
		getProjects: (state, action) => {
			return [
				...state.projects,
				, { ...action.payload, }
			]
			// state.projects = action.payload
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

export const getAllProjects = async (dispatch) => {
	let resp = await fetch('http://127.0.0.1:8080/project', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	if (resp.ok && resp.status === "200") {
		const projects = await resp.json()
		dispatch(getProjects(projects))

	} else {

		dispatch(loadProject())
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
