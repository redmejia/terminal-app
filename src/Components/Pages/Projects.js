import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'

const Projects = () => {
	let history = useHistory()
	const dispatch = useDispatch()
	const { projects, isLoad, isNotLoad } = useSelector(state => state.projects);

	// useEffect(() => {

	// }, [history, isLoad])


	useEffect(() => {

		// console.log("load ",isLoad);
		// if (isLoad) {
		// }
		if (isNotLoad) {
			// console.log("not load", isNotLoad);
			
			history.push("/new-project")
		}
		dispatch(getAllProjects())

	}, [dispatch, isLoad, isNotLoad, history])

	console.log(">.>>>>>>.", isLoad, isNotLoad);

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