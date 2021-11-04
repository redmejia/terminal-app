import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { newRegister } from "../../features/developers/devs";
import { useHistory, Link } from "react-router-dom";
import Input from "../Utils/Input";




const Register = () => {
	let history = useHistory()
	const dispatch = useDispatch();
	const { developer } = useSelector(state => state.dev);

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const data = {
		dev_email: email,
		dev_password: password,
	}

	if (developer.signin) {
		history.push("/projects")
	}

	// console.log(data);
	// console.log(register);

	return (
		<div className="form">
			<div className="transparent-box">
				<span className="fakes fakes--green"></span>
				<span className="fakes fakes--yellow"></span>
				<span className="fakes fakes--red"></span>
				<hr style={{ color: "white" }} />
				<div className="form--box">
					<p className="heading-primary">Register</p>
					<form>
						<Input
							className="form--box__inputs"
							type="text"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Input
							className="form--box__inputs"
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<a href="#/" type="button" className="btn btn--green-lg" onClick={() => dispatch(newRegister(data))}> register </a>
					</form>
					<p className="heading-secundary">
						I have an account
						{" "}<Link className="links-redirect" to="/">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Register;