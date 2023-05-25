import Image from "next/image";

interface ProjectProp {
	title: string;
	description: string;
	tools: string[];
	repo: string;
	demo: string;
}
interface ProjectWrapperProps {
	project: ProjectProp;
	index: number;
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({ project, index }) => (
	<div className="proj">
		<div className="details">
			<p>{project.title}</p>
			<div className="subtitles">
				<p className="description">{project.description}</p>
			</div>
			<ul className="tools">
				{project.tools.map((tool) => (
					<li key={tool}>
						<p className="description">{tool}</p>
					</li>
				))}
			</ul>
			<div className="subtitles">
				<a
					className="link"
					href={project.repo}
					target="__blank"
				>
					{" "}
					<small>Repository </small>{" "}
				</a>
				<a
					className="link"
					href={project.demo}
					target="__blank"
				>
					{" "}
					<small>Website </small>{" "}
				</a>
			</div>
		</div>
	</div>
);

export default ProjectWrapper;
