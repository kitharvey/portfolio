import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import HeadTitle from "@/components/HeadTitle";
import ProjectsPage from "@/components/ProjectsPage";
import Link from "next/link";

export default function Home() {
	const project = {
		projects: [
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
			},
		],

		otherProjects: [
			{
				title: "Frontend Mentor Submissions",
				url: "https://www.frontendmentor.io/profile/kitharvey",
			},
		],
	};
	const about = {
		overview:
			"Hi, I'm a Front-End Developer based in General Santos City, Philippines. I'm always fascinated by graphic design, typography and algorithms. Front-End development has given me the ability to do both design and code. I was hooked and I wanted to master this craft. My dream is to work with like-minded and passionate people building projects. When I'm away from my keyboard you can find me at the gym pumping irons, running and spending time with friends and family. I also love learning self-improvement, philosophy, finance, health and fitness. There is always room to grow.",
		experiences: [
			{
				company: "CAMBIATA MUSIC",
				title: "Web developer",
				date: "JUNE 2022 - AUGUST 2022",
			},
			{
				company: "YES WE VIBE",
				title: "UI DEVELOPER",
				date: "MAY 2021 - MAY 2022",
			},
			{
				company: "SPONSORLYTIX",
				title: "FRONT-END DEVELOPER",
				date: "JULY 2020 - OCTOBER 2020",
			},
		],
	};
	return (
		<>
			<HeadTitle title="" />
			<div
				id="home"
				className="section home"
			>
				<div className="main-text">
					<h1 className="name">I&apos;m Kit Harvey.</h1>
					<p className="description">
						I&apos;m a self-taught front-end developer.
					</p>
				</div>
				<div className="main-buttons-container">
					<div className="main-buttons">
						<Link
							href="https://docs.google.com/document/d/1Tx2Juuh6GJFa-CyOJjWkIc0hYZkQy_EAEnXNrR9Ds60/edit?usp=sharing"
							target="__blank"
						>
							View Resume
						</Link>
					</div>
					<div className="main-buttons">
						<Link href="/contact">Hire Me</Link>
					</div>
				</div>
			</div>
			<ProjectsPage
				projects={project.projects}
				otherProjects={project.otherProjects}
			/>
			<AboutPage
				overview={about.overview}
				experiences={about.experiences}
			/>
			<ContactPage />
		</>
	);
}
