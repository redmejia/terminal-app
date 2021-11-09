import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'

const Projects = () => {
	const dispatch = useDispatch()
	const { projects, loading } = useSelector(state => state.projects);


	useEffect(() => {
		dispatch(getAllProjects())
	}, [dispatch])
	
	console.log(projects);

	return (
		<>
			<Scroll>

				{
					loading ?
						<div class="spinner-border text-danger" style={{width: "20rem", height: "20rem"}}  role="status">
							{/* <span class="visually-hidden">Loading...</span> */}
						</div>
						:
						projects.map((i) => {
							return (
								<Card
									created={i.created}
									created_by={i.created_by}
									like={i.project_like.like_count}
									title={i.project_name}
									description={i.project_description}
								/>
							)
						})
				}
			</Scroll>
		</>

	);
}

export default Projects;