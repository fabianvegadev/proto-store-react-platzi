import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const NavbarProductsMenu = () => {
	const context = useContext(ShoppingCartContext);
	const activeStyle = "underline underline-offset-4";

	return (
		<>
			<li>
				<NavLink
					to="/"
					onClick={() => context.handleCategory("")}
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					All
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/jewelery"
					onClick={() => context.handleCategory("jewelery")}
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Jewelery
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/electronics"
					onClick={() => context.handleCategory("electronics")}
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Electronics
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/men's-clothing"
					onClick={() => context.handleCategory("men's clothing")}
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Men's clothing
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/women's-clothing"
					onClick={() => context.handleCategory("women's clothing")}
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Women's clothing
				</NavLink>
			</li>
		</>
	);
};

export { NavbarProductsMenu };
