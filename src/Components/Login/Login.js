
const Login = () => {
	const data = {
		projects: 53,
		topProjects: 35,
		developers: 153,
	}
	return (
		<div className="home">
			<div className="home__box">
				<div class="row">
					<div class="col home__box-rg">
						{/* 
												<div className="side-box">
														<img width="180" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/iterm2.svg" alt="logo" />
												</div> */}
						{/* <img width="180" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/iterm2.svg" alt="logo" /> */}
						{/* <div className="form-box"> */}

						<h2 className="heading-primary"> Hello World</h2>

						<h3 className="heading-secundary">You are not log in yet! help the next project become top project</h3>

						<h3 className="heading-secundary">More than <span className="remark-text"> {data.projects} </span> projects</h3>
						<h3 className="heading-secundary">More than <span className="remark-text"> {data.topProjects} </span> top projects</h3>
						<h3 className="heading-secundary">More than <span className="remark-text"> {data.developers} </span> developers colavorating</h3>
						{/* </div> */}

					</div>
					<div class="col home__box-lft">
						{/* <form onSubmit={e => userSignin(e)}> */}
						{/* <img width="180" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/iterm2.svg" alt="logo" /> */}

						<div className="form-box">
							<h2 className="heading-primary"> Log In </h2>


							<form>

								<input
									className="form-box__inputs"
									type="text"
									placeholder="email"
								// onChange={onHandle_Email}
								/>

								<input
									className="form-box__inputs"
									type="password"
									placeholder="password"
									autoComplete="no"
								// onChange={onHandle_Pwd}
								// onKeyDown={userSignin}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;

// <div className="home">
// <div className="home__box">
// 	<div className="row">
// 		<div className="col-1-of-2 home__box-rg">
// 			one
// 		</div>
// 		<div className="col-1-of-2 home__box-lft">
// 			two
// 		</div>
// 	</div>
// </div>
// </div>