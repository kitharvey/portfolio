import React from "react";
import ProjectWrapper from "./ProjectWrapper";

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
