import { useLoadStyle } from "@/hooks/useLoadStyle";
import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {
	const style = useLoadStyle({
		gap: "3em",
	});

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
	};
	const about = {
		overview:
			"Hi, I'm a Front-End Developer based in General Santos City, Philippines. I'm always fascinated by graphic design, typography and algorithms. Front-End development has given me the ability to do both design and code. I was hooked and I wanted to master this craft. My dream is to work with like-minded and passionate people building projects. When I'm away from my keyboard you can find me at the gym pumping irons, running and spending time with friends and family. I also love learning self-improvement, philosophy, finance, health and fitness. There is always room to grow.",
		experiences: [
			{
				company: "Cambiata Music",
				title: "Web Developer",
				date: "Jun 2022 - Aug 2022",
			},
			{
				company: "YesWeVibe",
				title: "UI Developer",
				date: "May 2021 - May 2022",
			},
			{
				company: "Sponsorlytix",
				title: "Front-end Developer",
				date: "Jul 2020 - Oct 2020",
			},
		],
	};

	return (
		<div
			className="flex"
			style={style}
		>
			<Home />
			<About
				overview={about.overview}
				experiences={about.experiences}
			/>
			<Projects projects={project.projects} />
		</div>
	);
};

export default MainPage;
