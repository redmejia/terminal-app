const Register = () => {
	return (
		<div className="home">
			<div className="home__box">
				<div class="container">
					<div class="row">
						<div class="col home__box-rg">
							1 of 2
						</div>
						<div class="col home__box-lft">
							{/* <form onSubmit={e => newUserRegistered(e)}> */}
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

export default Register;