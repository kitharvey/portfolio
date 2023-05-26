import { useEffect, useState, Children, cloneElement } from "react";

interface LoadStyleProps {
	newClassName: string[];
	children: JSX.Element;
}

const LoadStyle: React.FC<LoadStyleProps> = ({ newClassName, children }) => {
	const [classNameState, setClassName] = useState<string[]>([]);
	const arr = [1, 2, 3, 4, 5, 6, 7];
	// useEffect(() => {
	// 	let id = setTimeout(() => {}, 1000);
	// 	let newarr = [...classNameState];
	// 	newClassName.forEach((x, index) => {
	// 		console.log(x);
	// 		id = setTimeout(() => {
	// 			newarr.push(x);
	// 			setClassName(newarr);
	// 		}, 1000 * index);
	// 	});
	// 	return () => clearTimeout(id);
	// }, []);

	let newArr = [...classNameState];
	useEffect(() => {
		const timer = setTimeout(() => {}, 1000);
		newClassName.forEach((x, index) => {
			setTimeout(() => {
				newArr.push(x);
				setClassName(newArr);
			}, 1000 * index);
		});
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{Children.map(children, (child) =>
				cloneElement(child, { className: classNameState.join(" ") })
			)}
			{classNameState.join("-")}
		</>
	);
};

export default LoadStyle;
