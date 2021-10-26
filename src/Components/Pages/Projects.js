import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'

const Projects = () => {
	const dispatch = useDispatch()
	const { projects } = useSelector(state => state.projects);

	useEffect(() => {
		dispatch(getAllProjects())
	}, [dispatch])

	return (
		<>
			<Scroll>

				{
					projects.map((i) => {
						return (
							<Card
								created={i.created}
								created_by={i.created_by}
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