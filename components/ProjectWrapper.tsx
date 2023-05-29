import Image from "next/image";
import RenderString from "./RenderString";
import Link from "next/link";
import { useLoadStyle } from "@/hooks/useLoadStyle";

interface ProjectProp {
	title: string;
	description: string;
	tools: string[];
	repo: string;
	demo: string;
}
interface ProjectWrapperProps {
	project: ProjectProp;
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({ project }) => {
	const style = useLoadStyle({ columnGap: "1em" });

	return (
		<div>
			<p>
				<RenderString
					letters={project.title}
					fontFamily="default"
					fontSize="md"
					fontWeight="medium"
				/>
			</p>
			<p>
				<RenderString
					letters={project.description}
					fontFamily="default"
					fontSize="sm"
					fontWeight="normal"
				/>
			</p>
			<ul
				className="flex"
				style={style}
			>
				{project.tools.map((tool) => (
					<li key={tool}>
						<p>
							<RenderString
								letters={tool}
								fontFamily="mono"
								fontSize="sm"
								fontWeight="normal"
							/>
						</p>
					</li>
				))}
			</ul>
			<div
				className="flex"
				style={style}
			>
				<Link
					href={project.repo}
					target="__blank"
				>
					{" "}
					<RenderString
						letters="Repository"
						fontFamily="default"
						fontSize="sm"
						fontWeight="medium"
					/>
				</Link>
				<Link
					href={project.demo}
					target="__blank"
				>
					{" "}
					<RenderString
						letters="Website"
						fontFamily="default"
						fontSize="sm"
						fontWeight="medium"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ProjectWrapper;
