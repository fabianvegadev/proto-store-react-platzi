import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Navigate, NavLink } from "react-router-dom";

const NavbarUserMenu = () => {
	const context = useContext(ShoppingCartContext);
	const activeStyle = "underline underline-offset-4";

	// Sign Out
	const signOut = localStorage.getItem("sign-out");
	const parsedSignOut = JSON.parse(signOut);
	const isUserSignOut = context.signOut || parsedSignOut;

	// Acount
	const account = localStorage.getItem("account");
	const parsedAccount = JSON.parse(account);
	// Has an account
	const noAccountInLocalStorage = parsedAccount
		? Object.keys(parsedAccount).length === 0
		: true;
	const noAccountInLocalState = context.account
		? Object.keys(context.account).length === 0
		: true;
	const hasUserAcount = !noAccountInLocalState || !noAccountInLocalStorage;

	const handleSignOut = () => {
		const stringifiedSignOut = JSON.stringify(true);
		localStorage.setItem("sign-out", stringifiedSignOut);
		context.closeNavbar();
		context.setSignOut(true);
	};
	if (hasUserAcount && !isUserSignOut) {
		return (
			<>
				<li className="text-black/60">{context.account.email}</li>
				<li onClick={() => context.closeNavbar()}>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li onClick={() => context.closeNavbar()}>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Account
					</NavLink>
				</li>
				<li onClick={() => handleSignOut()}>
					<NavLink
						to="/sign-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign out
					</NavLink>
				</li>
			</>
		);
	} else {
		return (
			<li onClick={() => handleSignOut()}>
				<NavLink
					to="/sign-in"
					className={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Sign in
				</NavLink>
			</li>
		);
	}
};

export { NavbarUserMenu };
