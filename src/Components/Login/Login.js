const Login = () => {
	
	return (
		<div className="home">
			<div className="home__box">
				<div className="home__box--form">
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
	);
}

export default Login;

