import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import FormFeedback from "./FormFeedback";
import TableFeedback from "./TableFeedback";

const TeacherFeedback = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = id => {
		setActiveTab(id);
	};

	return (
		<div>
			<ul className="flex w-full p-2  justify-around text-center bg-[#102542]">
				<li
					style={
						activeTab == 1
							? { backgroundColor: "white", color: "black" }
							: { backgroundColor: "#102542" }
					}
					className=" rounded-lg p-2 font-bold text-white w-1/2 cursor-pointer transition-all duration-200 ease-in"
					onClick={() => handleTabClick(1)}
				>
					Form
				</li>
				<li
					style={
						activeTab == 2
							? { backgroundColor: "white", color: "black" }
							: { backgroundColor: "#102542" }
					}
					className="bg-sec_dark rounded-lg p-2 font-bold text-white w-1/2 cursor-pointer transition-all duration-200 ease-in"
					onClick={() => handleTabClick(2)}
				>
					Excel
				</li>
			</ul>

			<div className="tab_content">
				<Slide direction="up" duration={500}>
					{activeTab === 1 && <FormFeedback />}
					{activeTab === 2 && <TableFeedback />}
				</Slide>
			</div>
		</div>
	);
};

export default TeacherFeedback;
