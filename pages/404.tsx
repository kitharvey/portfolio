import RenderString from "@/components/RenderString";

const NotFound = () => {
	return (
		<>
			<h1>
				<RenderString
					letters="404"
					fontFamily="default"
					fontSize="lg"
					fontWeight="bold"
				/>
			</h1>
			<p>
				<RenderString
					letters="This page could not be found."
					fontFamily="default"
					fontSize="md"
					fontWeight="normal"
				/>
			</p>
		</>
	);
};

export default NotFound;
