import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import { createProject } from "../../../src/features/projects/projects";

import Input from "../Utils/Input";
import TextArea from "../Utils/TextArea";


const CreateProject = () => {
	const dispatch = useDispatch()
	const { developer } = useSelector(state => state.dev)
	let history = useHistory()

	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	const [projectRepo, setProjectRepo] = useState("");
	const [projectLive, setProjectLive] = useState("");

	// let d = new Date();
	// let timestamp = d.getTime();

	const data = {
		dev_id: developer.dev_id,
		project_name: projectName,
		project_description: projectDescription,
		created_by: developer.dev, // developer username
		// created: Math.round(timestamp / 1000), // on sever
		project_repo: projectRepo,
		project_live: projectLive,
	}

	const newProject = () => {
		dispatch(createProject(data))
		history.push("/super-user")
	}

	return (
		<>
			<div className="form">
				<div className="transparent-box--big">
					<span className="fakes fakes--green"></span>
					<span className="fakes fakes--yellow"></span>
					<span className="fakes fakes--red"></span>
					<hr style={{ color: "white" }} />
					<div className="form--box">
						<p className="heading-primary">Create Project</p>
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
						<Link className="btn btn--red-delete-lg" to="/super-user"> &crarr; </Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateProject;