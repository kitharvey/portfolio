import HeadTitle from "@/components/HeadTitle";
import ProjectWrapper from "@/components/ProjectWrapper";
import { useState } from "react";
const projects = [
	{
		title: "Pokénex",
		description:
			"Pokédex app in card style. Swipe through pokémon cards or guess who's that pokémon?",
		tools: [
			"nextjs",
			"typescript",
			"sass",
			"pokéapi",
			"framer-motion",
			"redux-toolkit",
			"mongodb",
			"next-auth",
		],
		repo: "https://github.com/kitharvey/pokenex",
		demo: "https://pokenex.vercel.app/",
		gif: "/pokenex.gif",
		gifPause: "/pokenex-pause.gif",
	},
];

const otherProjects = [
	{
		title: "Frontend Mentor Submissions",
		url: "https://www.frontendmentor.io/profile/kitharvey",
	},
];

const Projects = () => {
	const [isPlaying, setIsPlaying] = useState<number | null>(null);
	return (
		<>
			<HeadTitle title="Projects" />
			<div id="page" className="projects">
				<div className="proj-wrapper">
					{projects.map((project, index) => (
						<ProjectWrapper
							project={project}
							index={index}
							isPlaying={isPlaying}
							key={project.title}
							onMouseOut={() => setIsPlaying(null)}
							onBlur={() => setIsPlaying(null)}
							onMouseOver={() => setIsPlaying(index)}
							onFocus={() => setIsPlaying(index)}
						/>
					))}
				</div>
				<div className="other-projects">
					<h3>Other Projects:</h3>
					{otherProjects &&
						otherProjects.map(({ url, title }) => (
							<a href={url} key={title} target="__blank">
								<span>{title}</span>
							</a>
						))}
				</div>
			</div>
		</>
	);
};

export default Projects;
