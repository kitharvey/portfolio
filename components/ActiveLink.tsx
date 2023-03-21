import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { Children } from "react";

interface ActiveLinkProps {
	children: JSX.Element;
	activeClassName: string;
	href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
	children,
	activeClassName,
	...props
}) => {
	const asPath = usePathname();
	const child = Children.only(children);

	const className =
		asPath === props.href ? `nav-items ${activeClassName}` : "nav-items";

	return (
		<Link {...props} className={className}>
			{React.cloneElement(child)}
		</Link>
	);
};

export default ActiveLink;
