const CardFooter = (props) => {
	return (
		<div style={{ marginTop: '2rem', marginBottom: '1rem', marginLeft: '3rem' }}>
			<div class="row">
				<div class="col">
					{props.show_btn ?
						<div>
							< a href="#/" className="btn btn--green"> ++ </a>
							<p className="btn btn--like"> {props.like}</p>
						</div>
						:
						<div>
							<p> </p>
							<p className="btn btn--like"> {props.project_name} Has {props.like} likes</p>
						</div>
					}
				</div>
				<div class="col">
					<a href={props.repo}>Repo</a>&nbsp;&nbsp;&nbsp;<a href={props.live}>Live Code</a>
				</div>
			</div>
		</div >
	);
}

export default CardFooter;