import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const ShoppingCart = () => {
	const context = useContext(ShoppingCartContext);

	// Acount
	const account = localStorage.getItem("account");
	const parsedAccount = JSON.parse(account);

	// Sign Out
	const signOut = localStorage.getItem("sign-out");
	const parsedSignOut = JSON.parse(signOut);
	const isUserSignOut = context.signOut || parsedSignOut;

	// Has an account
	const noAccountInLocalStorage = parsedAccount
		? Object.keys(parsedAccount).length === 0
		: true;
	const noAccountInLocalState = context.account
		? Object.keys(context.account).length === 0
		: true;
	const hasUserAcount = !noAccountInLocalState || !noAccountInLocalStorage;

	const openCheckoutSideMenu = () => {
		context.openCheckout();
		context.closeProductDetail();
	};
	return (
		<div
			className="relative flex gap-0.5 items-center"
			onClick={() =>
				hasUserAcount && !isUserSignOut ? (
					openCheckoutSideMenu()
				) : (
					<Navigate replace to={"/sign-in"} />
				)
			}
		>
			<ShoppingBagIcon className="w-6 h-6 fill-none stroke-black cursor-pointer" />
			<div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white">
				{context.cartProducts.length}
			</div>
		</div>
	);
};

export { ShoppingCart };
