import React from "react";
import ProjectWrapper from "./ProjectWrapper";
import RenderString from "./RenderString";

interface ProjectsPageProps {
	projects: ProjectType[];
}

type ProjectType = {
	title: string;
	description: string;
	tools: string[];
	repo: string;
	demo: string;
};

const Projects: React.FC<ProjectsPageProps> = ({ projects }) => {
	return (
		<div id="projects">
			<p>
				<RenderString
					letters="Projects"
					fontFamily="default"
					fontSize="md"
					fontWeight="bold"
				/>
			</p>
			{projects.map((project) => (
				<ProjectWrapper
					project={project}
					key={project.title}
				/>
			))}
		</div>
	);
};

export default Projects;
