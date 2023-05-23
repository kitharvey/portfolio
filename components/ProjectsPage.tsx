import React from "react";
import ProjectWrapper from "./ProjectWrapper";

interface ProjectsPageProps {
	projects: ProjectType[];
	otherProjects: OtherProjectsType[];
}

type ProjectType = {
	title: string;
	description: string;
	tools: string[];
	repo: string;
	demo: string;
};

type OtherProjectsType = {
	title: string;
	url: string;
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({
	projects,
	otherProjects,
}) => {
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
			<div className="other-projects">
				<h3>Other Projects:</h3>
				{otherProjects &&
					otherProjects.map(({ url, title }) => (
						<a
							href={url}
							key={title}
							target="__blank"
						>
							<span>{title}</span>
						</a>
					))}
			</div>
		</div>
	);
};

export default ProjectsPage;
