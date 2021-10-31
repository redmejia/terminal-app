import { useState } from "react";

const CreateProject = () => {
	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	const [projectRepo, setProjectRepo] = useState("");
	const [projectLive, setProjectLive] = useState("");

	const data = {
		project_name: projectName,
		project_description: projectDescription,
		project_repo: projectRepo,
		project_live: projectLive,
	}


	const newProject = () => {
		console.log(data);
	}

	return (

		<>

			{/* <h2 className="heading-primary"> Register </h2> */}
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
						<a href="#/" className="btn btn--green-lg" onClick={newProject}> create </a>
						<a href="#/" className="btn btn--red-delete-lg"> 	&crarr;  </a>
					</div>
				</div>

			</div>
		</>
		// <div className="home">
		// 	<div className="home__box">
		// 		<div class="home__box--form">
		// 			{/* <form onSubmit={e => newUserRegistered(e)}> */}
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default CreateProject;