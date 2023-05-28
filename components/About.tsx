import React from "react";
import RenderString from "./RenderString";

interface AboutPageProps {
	overview: string;
	experiences: ExpTypes[];
}

type ExpTypes = {
	company: string;
	title: string;
	date: string;
};

const About: React.FC<AboutPageProps> = ({ overview, experiences }) => {
	return (
		<div id="about">
			<div>
				<p>
					<RenderString
						letters={overview}
						fontFamily="default"
						fontSize="md"
						fontWeight="normal"
					/>
				</p>
				<div>
					{experiences.map((exp, index) => {
						return (
							<div key={index}>
								<p>
									<RenderString
										letters={exp.date}
										fontFamily="default"
										fontSize="md"
										fontWeight="normal"
									/>
								</p>
								<p>
									<RenderString
										letters={exp.company}
										fontFamily="default"
										fontSize="md"
										fontWeight="bold"
									/>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
