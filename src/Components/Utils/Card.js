import { Link } from "react-router-dom";
import sample from "../../assets/term_log.png"
// 2021 comment
const Card = (props) => {
	return (
		<div className={props.cardSize}>
			<Link className="links" to={`/project/pro-id/${props.project_id}`}>
				<img className="card-img-top" src={sample} alt="sample" />
				<div className={props.cardBody}>
					<p className="title" >{props.title}</p>
					<p>
						<em>
							by @{props.created_by + " on "}
							{props.created}
						</em>
					</p>
					{
						props.isScroll ? // project was click for read more about project also like and comment
							<p className="paragraph">{props.description}</p>
							:
							<div>
								<p className="paragraph">{props.description}</p>
								{props.message}
							</div>
					}
				</div>
			</Link>
		</div >
	);
}

export default Card;