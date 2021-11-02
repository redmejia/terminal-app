import { Link } from "react-router-dom";
import { useSelector, useDispatch  } from 'react-redux'
import { useHistory } from "react-router-dom";
import { logOut } from "../../features/developers/devs";
import { logOutClearProjects } from "../../features/projects/projects";


const TopNavigation = () => {
	let history = useHistory()
	const dispatch = useDispatch()

	const logOUT = () => {
		history.push("/")
		dispatch(logOut())
		// dispatch(logOutClearProjects()) 
	}

	const { developer } = useSelector(state => state.dev);
	return (
		<ul className="top-nav">
			<li className="top-nav--logo">
				&ensp;
			</li>
			<li className="top-nav--dev">
				<div className="dropdown">
					<a className="btn btn--green-dev dropdown-toggle" href={developer.dev} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						@{developer.dev}
					</a>

					<ul className="dropdown-menu  drop-box" aria-labelledby="dropdownMenuLink">
						<li>sample</li>
						<li><Link to="/new-project">New Project ++</Link></li>
						<li><Link to="/me">My Profile</Link></li>
						<hr />
						<li>
							<div class="d-grid gap-2 col-10 mx-auto">
								<button onClick={()=>logOUT()} class="btn btn--red-delete" type="button">log out</button>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	);
}

export default TopNavigation;