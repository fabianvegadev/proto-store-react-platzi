import { ErrorIcon } from "./ErrorIcon";

const Error = () => {
	return (
		<figure className="flex flex-col items-center mt-10 text-center">
			<ErrorIcon size={80} />
			<strong>¡Ups! Algo salió mal.</strong>
			<p>
				Actualmente estamos experimentando problemas técnicos que nos impiden
				mostrar los productos. Nuestro equipo ya está trabajando en
				solucionarlo. Por favor, intenta nuevamente más tarde.
			</p>
			<strong>¡Gracias por tu paciencia!</strong>
		</figure>
	);
};

export { Error };
