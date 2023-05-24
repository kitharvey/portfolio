import React from "react";
import Link from "next/link";

const Contact: React.FC = ({}) => {
	return (
		<div
			id="contact"
			className="section contact"
		>
			<div className="contact-wrapper">
				<div className="email-wrapper">
					<div className="email">
						<p>Email me via </p>
						<p>
							<Link
								href="mailto:kitharveycaubalejo@gmail.com"
								target="__blank"
							>
								kitharveycaubalejo@gmail.com
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
