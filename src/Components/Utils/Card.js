import sample from "../../assets/term_log.png"
const Card = (props) => {
	return (
		<div className="card" >
			<img className="card-img-top" src={sample} alt="sample" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				{/* <a href="#" className="btn btn-primary">++</a> */}
				<a href="#/" className="btn btn--red-delete">delete</a>
			</div>
		</div>
	);
}

export default Card;