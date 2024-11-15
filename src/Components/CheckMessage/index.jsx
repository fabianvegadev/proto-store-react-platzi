import PropTypes from "prop-types";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
const CheckMessage = ({ children }) => {
	return (
		<span className="flex absolute left-0 right-0 top-20 mx-14 py-1 text-center justify-center bg-white/60 border rounded-lg">
			{children}
			<ShoppingBagIcon className="h-6 w-6 text-black" />
		</span>
	);
};

CheckMessage.propTypes = {
	children: PropTypes.node.isRequired,
};

export { CheckMessage };
