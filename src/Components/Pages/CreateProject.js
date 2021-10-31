import { useState } from "react";

import { useDispatch } from 'react-redux'
import { createProject } from '../../../src/features/projects/projects'


const CreateProject = () => {
	const dispatch = useDispatch()

	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	const [projectRepo, setProjectRepo] = useState("");
	const [projectLive, setProjectLive] = useState("");

	// let d = new Date();
	// let timestamp = d.getTime();

	const data = {
		dev_id: 53,
		project_name: projectName,
		project_description: projectDescription,
		created_by : "rey", // get the user from sigin
		// created: Math.round(timestamp / 1000), // 
		project_repo: projectRepo,
		project_live: projectLive,
	}


	const newProject = () => {
		dispatch(createProject(data))
	}

	return (

		<>
			<div className="home">
				<div className="home_box">

					<div className="box-project">
						<h1 style={{ color: "black" }}>Create New project</h1>
						<form >

							<input
								className="box-project__inputs"
								type="text"
								placeholder="project name"
								onChange={(e) => setProjectName(e.target.value)}
							/>

							<textarea
								className="box-project__inputs"
								rows="20"
								cols="74"
								placeholder="decription"
								onChange={(e) => setProjectDescription(e.target.value)}
							/>

							<input
								className="box-project__inputs"
								type="text"

								placeholder="git repo"
								onChange={(e) => setProjectRepo(e.target.value)}
							/>

							<input
								className="box-project__inputs"
								type="text"
								placeholder="live"
								onChange={(e) => setProjectLive(e.target.value)}
							/>
						</form>
						<a href="#/" className="btn btn--green-lg" onClick={() => newProject()}> create </a>
						<a href="#/" className="btn btn--red-delete-lg">&crarr;</a>
					</div>
				</div>

			</div>
		</>
	);
}

export default CreateProject;