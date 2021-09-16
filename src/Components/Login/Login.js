
const Login = () => {
	return (
		<div className="home">
			<div className="home__box">
				<div class="container">
					<div class="row">
						<div class="col home__box-rg">
							1 of 2
						</div>
						<div class="col">
							<form onSubmit={e => userSignin(e)}>
								<input
									className="reg-form"
									type="text"
									placeholder="email"
									// onChange={onHandle_Email}
								/>

								<input
									className="reg-form"
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