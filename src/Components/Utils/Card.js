import sample from "../../assets/term_log.png"
const Card = (props) => {
	return (
		<div className="card" >
			<img className="card-img-top" src={sample} alt="sample" />
			<div className="card-body">
				{/* <h5 className="heading-primary">{props.title}</h5> */}
				<p >{props.created}</p>
				<p >{props.created_by}</p>
				<p className="title" >{props.title}</p>
				<p className="paragraph">{props.description}</p>
				{/* <a href="#" className="btn btn-primary">++</a> */}
				<a href="#/" className="btn btn--green"> ++ </a>
				<p className="btn btn--like"> {props.like}</p>
			</div>
		</div>
	);
}

export default Card;