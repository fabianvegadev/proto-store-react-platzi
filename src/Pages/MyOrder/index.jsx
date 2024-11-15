import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Layout } from "../../Components/Layout";

function MyOrder() {
	const context = useContext(ShoppingCartContext);

	const currentPath = window.location.hash;

	console.log(currentPath);
	console.log(context.order);

	let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
	if (index === "last") index = context.order?.length - 1;
	return (
		<Layout>
			<div className="relative flex items-center justify-center w-80 mb-6">
				<Link to="/my-orders" className="absolute left-0">
					<ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
				</Link>
				<h1 className="font-medium text-xl">My Order</h1>
			</div>
			<div className="flex flex-col w-80">
				{context.order?.[index]?.products.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.image}
						price={product.price}
					/>
				))}
			</div>
		</Layout>
	);
}

export default MyOrder;
