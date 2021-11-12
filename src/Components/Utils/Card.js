import sample from "../../assets/term_log.png"
import Scroll from "./Scroll";

const Card = (props) => {
	return (
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
				{/* <div className="desc-scroll"> */}
				<Scroll
					className="scroll scroll--sm"
				>
					<p className="paragraph">{props.description}</p>
				</Scroll>
				{/* </div> */}
				{/* <a href="#" className="btn btn-primary">++</a> */}
			</div>
			<div style={{ marginTop: '1rem', marginBottom: '1rem', marginLeft: '3rem' }}>
				<div class="row">
					<div class="col">
						<a href="#/" className="btn btn--green"> ++ </a>
						<p className="btn btn--like"> {props.like}</p>

						<a href="#/">repro: one</a>{" "}
						<a href="#/">repro: one</a>

					</div>
					<div class="col">
						read more 
					</div>

				</div>
			</div>
		</div >
	);
}

export default Card;