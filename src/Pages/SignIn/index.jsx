import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";

const SignIn = () => {
	const context = useContext(ShoppingCartContext);
	const [view, setView] = useState("user-info");
	const form = useRef(null);

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

	const handleSignIn = () => {
		const stringifiedSignOut = JSON.stringify(false);
		localStorage.setItem("sign-out", stringifiedSignOut);
		context.closeNavbar();
		context.setSignOut(false);
		// Redirect
		return <Navigate replace to={"/"} />;
	};

	const createAnAccount = () => {
		const formData = new FormData(form.current);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};
		// Create account
		const stringifiedAccount = JSON.stringify(data);
		localStorage.setItem("account", stringifiedAccount);
		context.setAccount(data);
		// Sign in
		handleSignIn();
	};

	const renderLogin = () => {
		return (
			<form className="flex flex-col gap-4 w-80">
				<div className="flex flex-col gap-1">
					<label htmlFor="email" className="font-light text-sm">
						Your email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						defaultValue={parsedAccount?.email}
						placeholder="spiderman@ejemplo.com"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-sm
						placeholder:text-black/60 focus:outline-none py-2 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password" className="font-light text-sm">
						Your password
					</label>
					<input
						type="text"
						id="password"
						name="password"
						defaultValue={parsedAccount?.password}
						placeholder="*******"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-sm
						placeholder:text-black/60 focus:outline-none py-2 px-4"
					/>
				</div>
				<Link to="/">
					<button
						className="bg-black disabled:bg-black/40 text-white w-80 rounded-lg py-3"
						disabled={!hasUserAcount}
						onClick={() => handleSignIn()}
					>
						Log in
					</button>
				</Link>
				<a
					className="font-light text-xs underline underline-offset-4 text-center"
					href="/"
				>
					Forgot my password
				</a>
				<Link>
					<button
						className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg py-3 w-80 mb-4"
						disabled={hasUserAcount}
						onClick={() => setView("create-user-info")}
					>
						Sign up
					</button>
				</Link>
			</form>
		);
	};

	const renderCreateUserInfo = () => {
		return (
			<form ref={form} className="flex flex-col gap-4 w-80">
				<div className="flex flex-col gap-1">
					<label htmlFor="name" className="font-light text-sm">
						Your name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						defaultValue={parsedAccount?.name}
						placeholder="Peter Parker"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-sm
						placeholder:text-black/60 focus:outline-none py-2 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email" className="font-light text-sm">
						Your email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						defaultValue={parsedAccount?.email}
						placeholder="spiderman@ejemplo.com"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-sm
						placeholder:text-black/60 focus:outline-none py-2 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password" className="font-light text-sm">
						Your password
					</label>
					<input
						type="text"
						id="password"
						name="password"
						defaultValue={parsedAccount?.password}
						placeholder="*******"
						className="rounded-lg border border-black placeholder:font-light placeholder:text-sm
						placeholder:text-black/60 focus:outline-none py-2 px-4"
					/>
				</div>
				<Link to="/">
					<button
						className="bg-black text-white w-full rounded-lg py-3"
						onClick={() => createAnAccount()}
					>
						Create
					</button>
				</Link>
			</form>
		);
	};

	const renderView = () =>
		view === "create-user-info" ? renderCreateUserInfo() : renderLogin();

	return (
		<Layout>
			<h1 className="font-medium text-xl mb-8">Welcome</h1>
			{renderView()}
		</Layout>
	);
};

export default SignIn;
