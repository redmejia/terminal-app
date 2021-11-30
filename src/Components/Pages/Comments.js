import { useState } from "react";
import Scroll from "../Utils/Scroll";
import TextArea from "../Utils/TextArea";

const commnets = [
	// { id: 1, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
	{ id: 1, dev: "rey", comment: "this is short" },
	{ id: 2, dev: "rey", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
	{ id: 3, dev: "rey", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
	{ id: 4, dev: "me", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
	{ id: 5, dev: "me", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
]


const Comments = (props) => {
	const [comment, setComment] = useState({
		project_id: props.project_id,
		dev_username: props.dev,
		dev_comment: "hello world.!"
	})
	return (
		<div className="comment-box">
			<div className="transparent-box--big__xt">
				<span className="fakes fakes--green"></span>
				<span className="fakes fakes--yellow"></span>
				<span className="fakes fakes--red"></span>
				<hr style={{ color: "white" }} />
				<Scroll
					className="scroll-comment"
				>
					{
						commnets.map((i) => {
							return (
								<div className="comment">
									<p className="paragraph">
										<span className="comment-from">{i.dev}{" "}</span>{i.comment}
									</p>
								</div>
							)
						})
					}
				</Scroll>
				<div className="comment-area">
					<TextArea
						className="form--box__inputs"
						rows="4"
						cols="4"
						placeholder={"@" + props.dev}
						name="description"
						onChange={(e) => setComment(prevState => { return { ...prevState, dev_comment: e.target.value } })}
					/>
					<a href="#/" className="btn btn--green-lg"> comment </a>
				</div>
			</div>
		</div>
	);
}


export default Comments;