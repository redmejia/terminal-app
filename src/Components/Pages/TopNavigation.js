import { Link } from "react-router-dom";
import { useSelector, useDispatch  } from 'react-redux'
import { useHistory } from "react-router-dom";
import { logOut } from "../../features/developers/devs";


const TopNavigation = () => {
	let history = useHistory()
	const dispatch = useDispatch()

	const logOUT = () => {
		history.push("/")
		dispatch(logOut())
		// dispatch(logOutClearProjects()) 
	}

	const { developer } = useSelector(state => state.dev);
	console.log(developer);
	return (
		<ul className="top-nav">
			<li className="top-nav--logo">
				&ensp;
			</li>
			<li className="top-nav--dev">
				<div className="dropdown">
					<a className="btn btn--green-lg-solid dropdown-toggle" href={developer.dev} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						@{developer.dev}
					</a>

					<ul className="dropdown-menu  drop-box" aria-labelledby="dropdownMenuLink">
						<li><Link className="links" to="/new-project">New Project ++</Link></li>
						<li><Link className="links" to="/super-user">My Profile</Link></li>
						<hr />
						<li>
							<div className="d-grid gap-2 col-10 mx-auto">
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