import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'

const Projects = () => {
	let history = useHistory()
	const dispatch = useDispatch()
	const { projects, isLoad } = useSelector(state => state.projects);


	useEffect(() => {
		if (!isLoad) {
			history.push("/new-project")
		} else {
			dispatch(getAllProjects())

		}

	}, [dispatch, isLoad])

	console.log(">.>>>>>>.", isLoad);

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