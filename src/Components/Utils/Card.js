import sample from "../../assets/term_log.png"
const Card = (props) => {
	return (
		<div className="card" >
			<img className="card-img-top" src={sample} alt="sample" />
			<div className="card-body">
				<h5 className="heading-primary">{props.title}</h5>
				<p className="heading-secundary">{props.description}</p>
				{/* <a href="#" className="btn btn-primary">++</a> */}
				<a href="#/" className="btn btn--green">++</a>
			</div>
		</div>
	);
}

export default Card;