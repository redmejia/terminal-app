import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"

import Card from "../Utils/Card";
import { getProjectById } from "../../features/projects/projects";
import Loading from "../Utils/Loading";
import CardFooter from "../Utils/CardFooter";

const Project = () => {
	let { proid } = useParams()
	const dispatch = useDispatch()

	const { project, pending } = useSelector(state => state.projects || {});

	useEffect(() => {

		dispatch(getProjectById(proid))

	}, [dispatch, proid])

	const { like_count } = project.project_like || {};

	return (

		<>

			{
				pending ? <Loading
					className={"spinner-border text-danger"}
					style={{ width: "20rem", height: "20rem" }}
					role={"status"}
				/> :
					<div className="card-project">
						<Card
							created={project.created}
							created_by={project.created_by}
							title={project.project_name}
							description={project.project_description}
							project_id={project.project_id}
						/>
						<CardFooter
							show_btn={true}
							like={like_count}
							repo={project.project_repo}
							live={project.project_live}
						/>
					</div>
			}
		</>
	)
}

export default Project;