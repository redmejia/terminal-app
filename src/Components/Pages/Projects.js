import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Utils/Card";
import Scroll from "../Utils/Scroll";

import { getAllProjects } from '../../../src/features/projects/projects'
import Loading from '../Utils/Loading';
import CardFooter from '../Utils/CardFooter';

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
								<>
									<Card
										cardSize={"card card-rg"}
										cardBody={"card card-rg--body"}
										created={i.created}
										created_by={i.created_by}
										title={i.project_name}
										description={i.project_description}
										message={" ...read more about this project"} 
										project_id={i.project_id}
									/>
									<CardFooter
										show_btn={false} // show like button only when is click for read
										project_name={i.project_name}
										like={i.project_like.like_count}
										repo={i.project_repo}
										live={i.project_live}
									/>
								</>
							)
						})
				}
			</Scroll>
		</>

	);
}

export default Projects;