import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
	const { id, title, imageUrl, price, handleDelete } = props;

	let renderXMarkIcon;

	if (handleDelete) {
		renderXMarkIcon = (
			<XMarkIcon
				onClick={() => handleDelete(id)}
				className="h-6 w-6 text-black cursor-pointer absolute top-0 right-0"
			></XMarkIcon>
		);
	}

	return (
		<div className="flex justify-between items-center mb-3 relative">
			<div className="flex items-start gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={imageUrl}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light w-40">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium absolute bottom-1 right-0">
					${price}
				</p>
				{renderXMarkIcon}
			</div>
		</div>
	);
};

export { OrderCard };
