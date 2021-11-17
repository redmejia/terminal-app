import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'
import Loading from '../Utils/Loading';

const Projects = () => {
	const dispatch = useDispatch()
	const { projects, pending } = useSelector(state => state.projects);


	useEffect(() => {
		dispatch(getAllProjects())
	}, [dispatch])


	return (
		<>
			<Scroll
				className="scroll"
			>

				{
					pending ?
						<Loading
							className={"spinner-border text-danger"}
							style={{ width: "20rem", height: "20rem" }}
							role={"status"}
						/>
						:
						projects.map((i) => {
							return (
									<Card
										created={i.created}
										created_by={i.created_by}
										like={i.project_like.like_count}
										title={i.project_name}
										description={i.project_description}
										project_id={i.project_id}
									/>
							)
						})
				}
			</Scroll>
		</>

	);
}

export default Projects;