import { configureStore } from "@reduxjs/toolkit";
import projectSlice from '../features/projects/projects' // project slice
import userSlice from '../features/developers/devs'

export default configureStore({
	reducer: {
		dev: userSlice,
		projects : projectSlice
		
	}
})