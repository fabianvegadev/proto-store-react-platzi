import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import { CheckMessage } from "../CheckMessage";
import "./styles.css";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	const [message, setMessage] = useState("");

	const showMessage = () => {
		setMessage("First, you need to add products to the cart.");
		setTimeout(() => setMessage(""), 2000);
	};

	const handleDelete = (id) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id != id
		);
		context.setCartProducts(filteredProducts);
	};

	const handleCheckout = () => {
		const orderToAdd = {
			date: new Date().toLocaleDateString(),
			products: context.cartProducts,
			totalProducts: context.cartProducts.length,
			totalPrice: totalPrice(context.cartProducts),
		};
		if (context.cartProducts.length > 0) {
			context.setOrder([...context.order, orderToAdd]);
			context.setCartProducts([]);
			context.closeCheckout();
		} else {
			showMessage();
		}
	};

	return (
		<aside
			className={`${
				context.isCheckoutSideMenuOpen ? "flex" : "hidden"
			} checkout-side-menu flex-col fixed right-0 z-20 border border-black rounded-lg bg-white`}
		>
			<div className="flex justify-between items-center p-6 sticky top-0 rounded-lg bg-white">
				<h2 className="font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer absolute top-4 right-4"
						onClick={() => context.closeCheckout()}
					></XMarkIcon>
				</div>
			</div>
			<div className="px-6 overflow-y-scroll flex-1">
				{context.cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.image}
						price={product.price}
						handleDelete={handleDelete}
					/>
				))}
				{message && <CheckMessage>{message}</CheckMessage>}
			</div>
			<div className="px-6">
				<p className="flex justify-between items-center mb-2">
					<span className="font-light">Total:</span>
					<span className="font-medium text-2xl">
						${totalPrice(context.cartProducts)}
					</span>
				</p>
				<Link to="/my-orders/last">
					<button
						className="bg-black mb-6 py-3 text-white w-full rounded-lg"
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
