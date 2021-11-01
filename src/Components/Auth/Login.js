import Input from "../Utils/Input";

const Login = () => {

	return (


		<div className="form">
			<div className="transparent-box">
				<span style={{marginLeft:"4px", marginTop:"4px", height: "25px", width:"25px", backgroundColor:"green", borderRadius: "50%", display: "inline-block"}}></span>
				<span style={{marginLeft:"4px", marginTop:"4px", height: "25px", width:"25px", backgroundColor:"yellow", borderRadius: "50%", display: "inline-block"}}></span>
				<span style={{marginLeft:"4px", marginTop:"4px", height: "25px", width:"25px", backgroundColor:"red", borderRadius: "50%", display: "inline-block"}}></span>
				<hr style={{color:"white"}}/>
				<div className="form--box">
					<h1 style={{ color: "black" }}>Log in</h1>
					<form>
						<Input
							className="form--box__inputs"
							type="text"
							placeholder="email"
						/>

						<Input
							className="form--box__inputs"
							type="password"
							placeholder="password"
						/>
						<a href="#/" className="btn btn--green-lg"> log in </a>
						{/* <a href="#/" className="btn btn--green-lg">register</a> */}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

