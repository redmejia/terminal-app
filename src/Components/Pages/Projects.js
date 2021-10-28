import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects, createProject } from '../../../src/features/projects/projects'

const Projects = () => {
	const dispatch = useDispatch()
	const { projects } = useSelector(state => state.projects);

	useEffect(() => {
		dispatch(getAllProjects())
	}, [dispatch])

	// const run = () =>{
	// 	const dummy_data = {
	// 		"dev_id" : 4,
	// 		"created_by" : "THIS IS A TES FROM FRONT END",
	// 		"project_name" : "I am lein",
	// 		"project_description" : "This is leie",
	// 		"project_repo" : "http://github.com/lien",
	// 		"project_live" : "http://live.com/lien"
	// 	}
	
	// 	dispatch(createProject(dummy_data))

	// }

	// run()


	return (
		<>
			<Scroll>

				{
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