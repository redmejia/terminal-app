
const Login = () => {
	return (
		<div className="home">
			<div className="home__box">
				<div class="container">
					<div class="row">
						<div class="col home__box-rg">
							<img width="80" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/iterm2.svg" />
						</div>
						<div class="col home__box-lft">
							{/* <form onSubmit={e => userSignin(e)}> */}
							<div className="form-box">

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