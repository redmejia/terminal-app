import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createProject } from '../../../src/features/projects/projects'
import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";


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
		created_by: "rey", // get the user from sigin
		// created: Math.round(timestamp / 1000), // 
		project_repo: projectRepo,
		project_live: projectLive,
	}
	console.log(data);

	const newProject = () => {
		dispatch(createProject(data))
	}

	return (
		<>
			<div className="form">
				<div className="transparent-box--big">
					<span style={{ marginLeft: "6px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "green", borderRadius: "50%", display: "inline-block" }}></span>
					<span style={{ marginLeft: "6px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "yellow", borderRadius: "50%", display: "inline-block" }}></span>
					<span style={{ marginLeft: "6px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "red", borderRadius: "50%", display: "inline-block" }}></span>
					<hr style={{ color: "white" }} />
					<div className="form--box">
						<h1 style={{ color: "green" }}>Create New project</h1>
						<form>
							<Input
								className="form--box__inputs"
								type="text"
								placeholder="project name"
								name="project name"
								value={projectName}
								onChange={(e) => setProjectName(e.target.value)}
							/>

							<TextArea
								className="form--box__inputs"
								rows="20"
								cols="74"
								placeholder="decription"
								name="description"
								value={projectDescription}
								onChange={(e) => setProjectDescription(e.target.value)}
							/>

							<Input
								className="form--box__inputs"
								type="text"
								placeholder="git repo"
								name="repo"
								value={projectRepo}
								onChange={(e) => setProjectRepo(e.target.value)}
							/>

							<Input
								className="form--box__inputs"
								type="text"
								placeholder="live"
								name="live"
								value={projectLive}
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