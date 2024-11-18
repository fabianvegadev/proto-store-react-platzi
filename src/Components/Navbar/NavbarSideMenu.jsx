import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useMediaQuery } from "../../Hooks/UseMediaQuery";
import { NavbarProductsMenu } from "./NavbarProductsMenu";
import { NavbarUserMenu } from "./NavbarUserMenu";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NavbarSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	// Sign Out
	const signOut = localStorage.getItem("sign-out");
	const parsedSignOut = JSON.parse(signOut);
	const isUserSignOut = context.signOut || parsedSignOut;

	// Media Query
	const minWidth600 = useMediaQuery("(min-width:600px)");

	if (!isUserSignOut) {
		return (
			<aside className="absolute top-full right-16 z-10 bg-white border border-black rounded-lg p-2 pt-6">
				<XMarkIcon
					className="h-5 w-5 text-black cursor-pointer absolute top-0.5 right-1"
					onClick={() => context.closeNavbar()}
				></XMarkIcon>
				<ul>
					{!minWidth600 && (
						<>
							<NavbarProductsMenu />
							<hr className="border border-t-0 border-black/80 my-2" />
						</>
					)}
					<NavbarUserMenu />
				</ul>
			</aside>
		);
	}
};

export { NavbarSideMenu };
