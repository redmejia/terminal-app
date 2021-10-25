import { configureStore } from "@reduxjs/toolkit";
import projectSlice from '../features/projects/projects' // project slice

export default configureStore({
	reducer: {

		projects : projectSlice
		
	}
})