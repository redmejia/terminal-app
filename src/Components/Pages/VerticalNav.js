const VerticalNav = () => {
	return (
		<div className="container " >

			<ul className="vertical-nav" >
				<li className="vertical-nav__list" ><a className="vertical-nav__list--link" href="#home">Projects</a></li>
				<li className="vertical-nav__list" ><a className="vertical-nav__list--link" href="#home">Top Projects</a></li>
				<li className="vertical-nav__list" ><a className="vertical-nav__list--link" href="#news">Tech News</a></li>
			</ul>
		</div>
	);
}

export default VerticalNav;