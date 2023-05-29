import React from "react";
import RenderString from "./RenderString";
import { useLoadStyle } from "@/hooks/useLoadStyle";

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
	const style = useLoadStyle({ gap: "1em" });

	return (
		<div id="about">
			<div
				className="flex"
				style={style}
			>
				<div>
					<p>
						<RenderString
							letters="Overview"
							fontFamily="default"
							fontSize="md"
							fontWeight="bold"
						/>
					</p>
					<p>
						<RenderString
							letters={overview}
							fontFamily="default"
							fontSize="md"
							fontWeight="normal"
						/>
					</p>
				</div>
				<div>
					<p>
						<RenderString
							letters="Experience"
							fontFamily="default"
							fontSize="md"
							fontWeight="bold"
						/>
					</p>

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
									{}
									<RenderString
										letters={exp.title + " · "}
										fontFamily="default"
										fontSize="md"
										fontWeight="normal"
									/>
									<RenderString
										letters={exp.company}
										fontFamily="default"
										fontSize="md"
										fontWeight="medium"
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
