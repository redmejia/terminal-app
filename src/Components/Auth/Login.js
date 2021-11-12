import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { devSignin } from "../../features/developers/devs";
import { Link, useHistory } from "react-router-dom";
import Input from "../Utils/Input";
import Loading from "../Utils/Loading";

const Login = () => {
	const dispatch = useDispatch()
	const { developer, pending } = useSelector(state => state.dev);
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
				{/* fake buttons */}
				<span className="fakes fakes--green"></span>
				<span className="fakes fakes--yellow"></span>
				<span className="fakes fakes--red"></span>
				<hr style={{ color: "white" }} />
				<div className="form--box">
					<p className="heading-primary">Log in</p>
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
						<a href="#/" type="button" className="btn btn--green-lg" onClick={() => dispatch(devSignin(data))}> log in </a>
					</form>
					<p className="heading-secundary">
						Don't have an account?
						{" "}<Link className="links-redirect" to="/register">Register</Link>
					</p>
					{pending ?
						<Loading
							className={"spinner-border text-danger"}
							role={"status"}
						/>
						: null}
				</div>
			</div>
		</div>
	);
}

export default Login;

