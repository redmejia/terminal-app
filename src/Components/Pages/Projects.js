import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'

const Projects = () => {
	let history = useHistory()
	const dispatch = useDispatch()
	const { projects, isLoading} = useSelector(state => state.projects);


	useEffect(() => {
			dispatch(getAllProjects())
	}, [ dispatch])


	return (
		<>
			<Scroll>

				{
					isLoading ? <h1 style={{color : "white"}}>...Loading</h1>:
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