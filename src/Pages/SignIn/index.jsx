import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";

const SignIn = () => {
	return (
		<Layout>
			<h1 className="mb-8">Welcome</h1>
			<form className="flex flex-col items-center w-80">
				<label className="w-full">Email</label>
				<input
					className="border border-black rounded-lg px-3 py-1 w-full mb-4"
					type="text"
					placeholder="ejemplo@ejemplo.com"
				/>
				<label className="w-full">Password</label>
				<input
					className="border border-black rounded-lg px-3 py-1 w-full mb-8"
					type="password"
				/>
				<Link>
					<button className="bg-black disabled:bg-black/40 text-white w-80 rounded-lg px-3 py-1 mb-4">
						Log in
					</button>
				</Link>
				<a className="mb-4">Forgot my password</a>
				<Link>
					<button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg px-3 py-1 w-80 mb-4">
						Sign up
					</button>
				</Link>
			</form>
		</Layout>
	);
};

export default SignIn;
