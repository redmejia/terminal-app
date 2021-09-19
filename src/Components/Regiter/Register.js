const Register = () => {
	return (
		<div className="home">
			<div className="home__box">
				<div class="container">
					<div class="row">
						<div class="col home__box-rg">
							1 of 2
						</div>
						<div class="col">
							{/* <form onSubmit={e => newUserRegistered(e)}> */}
							<form>

								<input
									className="reg-form"
									type="text"
									placeholder="email"
								// onChange={onHandleEmail}
								/>
								<input
									className="reg-form"
									type="password"
									placeholder="password"
									autoComplete="on"
								// onChange={onHandlePwd}
								// onKeyDown={newUserRegistered}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;