import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getAllTopProjects } from '../../../src/features/projects/projects'
import Loading from '../Utils/Loading';



import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";


// this is just data test for retrive i will get all top liked project here.

const TopProjects = () => {

	const dispatch = useDispatch()
	const { projects, pending } = useSelector(state => state.projects);


	useEffect(() => {
		dispatch(getAllTopProjects())
	}, [dispatch])

	console.log(projects);

	return (

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

	);
}

export default TopProjects;