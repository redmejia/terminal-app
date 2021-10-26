import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: 'projects',
	initialState: { projects: [] },

	reducers: {
		getProjects: (state, action) => {
			state.projects = action.payload
		}
	}
})

export default projectSlice.reducer

const { getProjects } = projectSlice.actions

export const getAllProjects = () => {
	return (dispatch) => {
		fetch('http://127.0.0.1:8080/project', {
			method : 'GET',
			headers: {
                'Content-Type': 'application/json',
            },
		})
			.then(res => res.json())
			.then(data => { dispatch(getProjects(data)) })
	}
}