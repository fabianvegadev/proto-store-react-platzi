import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { useMediaQuery } from "../../Hooks/UseMediaQuery";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";
import { NavbarProductsMenu } from "./NavbarProductsMenu";
import { NavbarUserMenu } from "./NavbarUserMenu";
import { NavbarSideMenu } from "./NavbarSideMenu";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	const activeStyle = "underline underline-offset-4";

	// Sign Out
	const signOut = localStorage.getItem("sign-out");
	const parsedSignOut = JSON.parse(signOut);
	const isUserSignOut = context.signOut || parsedSignOut;

	// Media Query
	const minWidth820 = useMediaQuery("(min-width:820px)");
	const minWidth600 = useMediaQuery("(min-width:600px)");

	// Navar Side Menu
	const openNavbarSideMenu = () => {
		context.closeCheckout();
		context.closeProductDetail();
		context.openNavbar();
	};

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink
						to={`${isUserSignOut ? "/sign-in" : "/"}`}
						onClick={() => context.setSearchByCategory()}
					>
						ProtoStore
					</NavLink>
				</li>
				{minWidth600 && <NavbarProductsMenu />}
			</ul>
			<ul className="flex items-center gap-3">
				{minWidth820 ? (
					<NavbarUserMenu />
				) : (
					<Bars4Icon
						className="w-6 h-6 fill-none stroke-black cursor-pointer"
						onClick={() => openNavbarSideMenu()}
					/>
				)}
				<li className="flex items-center">
					<ShoppingCart />
				</li>
			</ul>
			{context.isNavbarSideMenuOpen && <NavbarSideMenu />}
		</nav>
	);
};

export default Navbar;
