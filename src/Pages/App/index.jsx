import { useContext } from "react";
import {
	ShoppingCartProvider,
	initializeLocalStorage,
	ShoppingCartContext,
} from "../../Context";
import { useRoutes, HashRouter, Navigate } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
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

	let routes = useRoutes([
		{
			path: "/",
			element:
				hasUserAcount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={"/sign-in"} />
				),
		},
		{
			path: "/jewelery",
			element:
				hasUserAcount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={"/sign-in"} />
				),
		},
		{
			path: "/electronics",
			element:
				hasUserAcount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={"/sign-in"} />
				),
		},
		{
			path: "/men's-clothing",
			element:
				hasUserAcount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={"/sign-in"} />
				),
		},
		{
			path: "/women's-clothing",
			element:
				hasUserAcount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={"/sign-in"} />
				),
		},
		{ path: "/my-account", element: <MyAccount /> },
		{ path: "/my-order", element: <MyOrder /> },
		{ path: "/my-orders", element: <MyOrders /> },
		{ path: "/my-orders/last", element: <MyOrder /> },
		{ path: "/my-orders/:id", element: <MyOrder /> },
		{ path: "/sign-in", element: <SignIn /> },
		{ path: "/*", element: <NotFound /> },
	]);

	return routes;
};

const App = () => {
	initializeLocalStorage();
	return (
		<ShoppingCartProvider>
			<HashRouter>
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
			</HashRouter>
		</ShoppingCartProvider>
	);
};

export default App;
