import { Link } from "react-router-dom";
import sample from "../../assets/term_log.png"

const Card = (props) => {
	return (
		<Link className="links" to={`/project/pro-id/${props.project_id}`}>
			<div className="card" >
				<img className="card-img-top" src={sample} alt="sample" />
				<div className="card-body">
					{/* <h5 className="heading-primary">{props.title}</h5> */}
					<p >
						<em>@{props.created_by}</em>
						<br></br>
						{props.created}
					</p>
					<p className="title" >{props.title}</p>
					<div className="scroll--body-card">
						<p className="paragraph">{props.description} ... keep reading and comment </p>
					</div>
					
					{/* <a href="#" className="btn btn-primary">++</a> */}
				</div>
			</div >

		</Link>
	);
}

export default Card;