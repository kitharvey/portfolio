import React from "react";

interface AboutPageProps {
	overview: string;
	experiences: ExpTypes[];
}

type ExpTypes = {
	company: string;
	title: string;
	date: string;
};

const AboutPage: React.FC<AboutPageProps> = ({ overview, experiences }) => {
	return (
		<div
			id="about"
			className="section about"
		>
			<div className="about-container">
				<div className="about-details">
					<div className="overview">
						<h1>Overview</h1>
						<p className="overview-text">{overview}</p>
					</div>
					<div className="experience">
						<h1>Experience</h1>
						<div className="company-wrapper">
							{experiences.map((exp, index) => {
								return (
									<div
										className="company-section"
										key={index}
									>
										<p className="time">{exp.date}</p>
										<p className="company">
											<span>{exp.title}</span>&nbsp;&#64;&nbsp;{exp.company}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
