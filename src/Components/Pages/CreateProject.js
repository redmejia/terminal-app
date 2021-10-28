const CreateProject = () => {
	return (

		<>

			{/* <h2 className="heading-primary"> Register </h2> */}
			<form>

				<input
					className="form-box__inputs"
					type="text"
					placeholder="project name"
				// onChange={onHandle_Email}
				/>

				<input
					className="form-box__inputs"
					type="text"

					placeholder="git repo"
				// onChange={onHandle_Email}
				/>

				<input
					className="form-box__inputs"
					type="text"
					placeholder="live"
				// onChange={onHandle_Email}
				/>

				<input
					className="form-box__inputs"
					rows="4"
					cols="74"
					placeholder="decription"

				/>
			</form>
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