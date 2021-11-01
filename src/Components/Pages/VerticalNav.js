import { Link } from "react-router-dom";

const VerticalNav = () => {
	return (
		<div className="container " >

			<ul className="vertical-nav" >
				<li className="vertical-nav__list" ><Link to="/plus-project" className="vertical-nav__list--link" >Plus</Link></li>


				<li className="vertical-nav__list" ><Link to="/projects" className="vertical-nav__list--link" >Projects</Link></li>
				{/* <li className="vertical-nav__list" ><a className="vertical-nav__list--link" href="#news">Tech News</a></li> */}
			</ul>
		</div>
	);
}

export default VerticalNav;