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
		<div
			id="projects"
			className="section projects"
		>
			<div className="proj-wrapper">
				{projects.map((project, index) => (
					<ProjectWrapper
						project={project}
						index={index}
						key={project.title}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
