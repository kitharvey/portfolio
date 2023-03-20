import HeadTitle from "@/components/HeadTitle";

const Contact = () => {
	return (
		<>
			<HeadTitle title="Contact" />
			<div id="page" className="contact">
				<div className="contact-wrapper">
					<div className="accounts">
						<p>Follow me on</p>
						<div className="links">
							<a href="https://github.com/kitharvey" target="__blank">
								GitHub
							</a>
							<a href="https://www.linkedin.com/in/kitharvey/" target="__blank">
								LinkedIn
							</a>
							<a href="https://twitter.com/kithrvy/" target="__blank">
								Twitter
							</a>
						</div>
					</div>

					<div className="email-wrapper">
						<div className="email">
							<p>
								Feel free to email me via{" "}
								<span>
									<a
										href="mailto:kitharveycaubalejo@gmail.com"
										target="__blank"
									>
										kitharveycaubalejo@gmail.com
									</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
