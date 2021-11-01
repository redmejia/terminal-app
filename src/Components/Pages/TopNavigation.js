import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


const TopNavigation = () => {
	const { register } = useSelector(state => state.dev);
	return (
		<ul className="top-nav">
			<li className="top-nav--logo">
				&ensp;
			</li>
			<li className="top-nav--dev">
				<div className="dropdown">
					<a className="btn btn--green-dev dropdown-toggle" href={register.dev} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						@{register.dev}
					</a>

					<ul className="dropdown-menu  drop-box" aria-labelledby="dropdownMenuLink">
						<li>sample</li>
						<li><Link to="/new-project">New Project ++</Link></li>
						<li><Link to="/me">My Profile</Link></li>
						<hr />
						<li><Link to="/">Log out</Link></li>
					</ul>
				</div>
			</li>
		</ul>
	);
}

export default TopNavigation;