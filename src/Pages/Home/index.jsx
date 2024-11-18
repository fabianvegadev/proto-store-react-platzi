import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Loading } from "../../Components/Loading";
import { Error } from "../../Components/Error";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
	const context = useContext(ShoppingCartContext);

	const renderView = () => {
		if (context.loading) {
			return <Loading />;
		}
		if (context.error) {
			return <Error />;
		}
		if (context.filteredItems?.length > 0) {
			return (
				<div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center justify-center w-full max-w-screen-lg">
					{context.filteredItems?.map((item) => (
						<Card key={item.id} data={item} />
					))}
				</div>
			);
		} else if (
			!context.loading &&
			!context.error &&
			context.filteredItems?.length === 0
		) {
			return <div className="mt-8">We don't have anything 🥲</div>;
		}
	};
	return (
		<Layout>
			<div className="relative flex items-center justify-center w-80 mb-4">
				<h1 className="font-medium text-2xl">Exclusive Products</h1>
			</div>
			<input
				type="text"
				placeholder="Search a product"
				className="rounded-lg border border-black focus:outline-none w-80 px-4 py-2 mb-4"
				onChange={(event) => context.setSearchByTitle(event.target.value)}
			/>
			{renderView()}
			<ProductDetail />
		</Layout>
	);
}

export default Home;
