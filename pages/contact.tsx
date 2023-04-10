import HeadTitle from "@/components/HeadTitle";
import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Recaptcha from "react-google-recaptcha";
import Link from "next/link";

const Contact = () => {
	return (
		<>
			<HeadTitle title="Contact" />
			<div id="page" className="contact">
				<div className="contact-wrapper">
					<div className="email-wrapper">
						<div className="email">
							<p>
								Feel free to email me via{" "}
								<span>
									<Link
										href="mailto:kitharveycaubalejo@gmail.com"
										target="__blank"
									>
										kitharveycaubalejo@gmail.com
									</Link>
								</span>
							</p>
							<p>Or fill in the contact form down below</p>
						</div>
						<Formik
							initialValues={{
								fromName: "",
								fromEmail: "",
								fromMessage: "",
								recaptcha: "",
								success: false,
							}}
							validationSchema={Yup.object({
								fromEmail: Yup.string()
									.min(3, "Too Short!")
									.email("Invalid email format")
									.required("Required!"),
								fromName: Yup.string()
									.min(3, "Too Short!")
									.required("Required!"),
								fromMessage: Yup.string().required("Required!"),
								recaptcha: Yup.string().required("Robots are not welcome yet!"),
							})}
							onSubmit={(
								_values,
								{ setSubmitting, resetForm, setFieldValue }
							) => {
								emailjs
									.sendForm(
										`${process.env.NEXT_PUBLIC_SERVICE_ID}`,
										`${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
										"contact-form",
										`${process.env.NEXT_PUBLIC_USER_ID}`
									)
									.then(
										() => {
											setSubmitting(false);
											setFieldValue("success", true);
											resetForm();
										},
										(error) => {
											setSubmitting(false);
											setFieldValue("success", false);
											alert(
												`Something went wrong, please try again! ${error.text}`
											);
										}
									);

								alert("successfully sent an email.");
							}}
						>
							{({ errors, touched, setFieldValue, isSubmitting }) => (
								<div className="sign-in-form-main">
									<Form className="contact-form-container" id="contact-form">
										<label htmlFor="fromName">Name:</label>
										<Field
											className="sign-in-inputs"
											type="text"
											name="fromName"
											id="fromName"
											placeholder="Name *"
											style={{
												borderColor:
													errors.fromName && touched.fromName
														? "#1DA1F2"
														: " #999999",
											}}
										/>
										<div className="form-error">
											<ErrorMessage name="fromName" component="p" />
										</div>
										<label htmlFor="fromEmail">Email:</label>
										<Field
											className="sign-in-inputs"
											type="email"
											name="fromEmail"
											id="fromEmail"
											placeholder="Email *"
											style={{
												borderColor:
													errors.fromEmail && touched.fromEmail
														? "#1DA1F2"
														: " #999999",
											}}
										/>
										<div className="form-error">
											<ErrorMessage name="fromEmail" component="p" />
										</div>
										<label htmlFor="fromMessage">Message:</label>
										<Field
											as="textarea"
											className="sign-in-inputs"
											type="text"
											name="fromMessage"
											id="fromMessage"
											placeholder="Message *"
											style={{
												borderColor:
													errors.fromMessage && touched.fromMessage
														? "#1DA1F2"
														: " #999999",
											}}
										/>
										<div className="form-error">
											<ErrorMessage name="fromMessage" component="p" />
										</div>

										<FastField
											className="recaptcha"
											component={Recaptcha}
											sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
											name="recaptcha"
											onChange={(value: string) =>
												setFieldValue("recaptcha", value)
											}
										/>

										<div className="sign-in-form-footer">
											<button className="sign-in-submit" type="submit">
												Send
											</button>
											<p>{isSubmitting}</p>
										</div>
									</Form>
								</div>
							)}
						</Formik>
					</div>
					<div className="accounts">
						<p>Follow me on</p>
						<div className="links">
							<Link href="https://github.com/kitharvey" target="__blank">
								GitHub
							</Link>
							<Link
								href="https://www.linkedin.com/in/kitharvey/"
								target="__blank"
							>
								LinkedIn
							</Link>
							<Link href="https://twitter.com/kithrvy/" target="__blank">
								Twitter
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
