import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { newSignin } from "../../features/developers/devs";
import { useHistory } from "react-router-dom";
import Input from "../Utils/Input";

const Login = () => {
	const dispatch = useDispatch()
	const { developer } = useSelector(state => state.dev);
	let history = useHistory()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const data = {
		dev_email: email,
		dev_password: password,
	}


	if (developer.signin) {
		history.push("/projects")
	}


	return (
		<div className="form">
			<div className="transparent-box">
				<span style={{ marginLeft: "4px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "green", borderRadius: "50%", display: "inline-block" }}></span>
				<span style={{ marginLeft: "4px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "yellow", borderRadius: "50%", display: "inline-block" }}></span>
				<span style={{ marginLeft: "4px", marginTop: "4px", height: "25px", width: "25px", backgroundColor: "red", borderRadius: "50%", display: "inline-block" }}></span>
				<hr style={{ color: "white" }} />
				<div className="form--box">
					<h1 style={{ color: "black" }}>Log in</h1>
					<form>
						<Input
							className="form--box__inputs"
							type="text"
							placeholder="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Input
							className="form--box__inputs"
							type="password"
							placeholder="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<a href="#/" type="button" className="btn btn--green-lg" onClick={() => dispatch(newSignin(data))}> log in </a>
						{/* <a href="#/" className="btn btn--green-lg">register</a> */}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

