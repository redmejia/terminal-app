import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: 'projects',
	initialState: { projects: [] },

	reducers: {
		getProjects: (state, action) => {
			state.projects = action.payload
		},
		createNewProject: (state, action) => {
			return [state.projects, { ...action.payload }]
		},
		clearProjectState : (state) => {
			state.projects = []
		}

	}
})

export default projectSlice.reducer

const { getProjects, createNewProject, clearProjectState } = projectSlice.actions

export const getAllProjects = () => {
	return (dispatch) => {
		return fetch('http://127.0.0.1:8080/project', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => { dispatch(getProjects(data)) })
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
