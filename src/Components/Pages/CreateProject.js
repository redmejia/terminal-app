const CreateProject = () => {
	return (

		<>

			{/* <h2 className="heading-primary"> Register </h2> */}
			<div className="home">
				<div className="home_box">

					<div className="box-project">
						<h1 style={{color:"black"}}>Create New project</h1>
						<form>

							<input
								className="box-project__inputs"
								type="text"
								placeholder="project name"
							// onChange={onHandle_Email}
							/>

							<textarea
								className="box-project__inputs"
								rows="20"
								cols="74"
								placeholder="decription"

							/>

							<input

								className="box-project__inputs"
								type="text"

								placeholder="git repo"
							// onChange={onHandle_Email}
							/>

							<input

								className="box-project__inputs"
								type="text"
								placeholder="live"
							// onChange={onHandle_Email}
							/>

						</form>
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