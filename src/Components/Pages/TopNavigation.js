
const TopNavigation = () => {
	return (
		<ul className="top-nav">
			<li className="top-nav--logo">
				&ensp;
			</li>
			<li className="top-nav--dev">
				<div className="dropdown">
					<a className="btn btn--green-dev dropdown-toggle" href="reynaldo" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						reynaldo
					</a>

					<ul className="dropdown-menu  drop-box" aria-labelledby="dropdownMenuLink">
						
						<li>New++</li>
						<hr />
						<li>Log out</li>
					</ul>
				</div>
			</li>
		</ul>
	);
}

export default TopNavigation;