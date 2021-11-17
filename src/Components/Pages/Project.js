import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"

import Card from "../Utils/Card";
import { getProjectById } from "../../features/projects/projects";
import Loading from "../Utils/Loading";

const Project = () => {
	let { proid } = useParams()
	const dispatch = useDispatch()


	const { project, pending } = useSelector(state => state.projects);

	useEffect(() => {

		dispatch(getProjectById(proid))


	}, [dispatch, proid])

	return (

		<>
			{
				pending ? <Loading
					className={"spinner-border text-danger"}
					style={{ width: "20rem", height: "20rem" }}
					role={"status"}
				/> :
					<div>
						<Card
							created={project.created}
							created_by={project.created_by}
							// like_count={project.project_like}
							title={project.project_name}
							description={project.project_description}
							project_id={project.project_id}
						/>
					</div>
			}
		</>
	)
}

export default Project;