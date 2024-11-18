import { useState, useEffect, useLayoutEffect } from "react";
/** Modo de uso:
 * useMediaQuery('(max-width:420px)')
 * @param {string} mediaQuery
 * @returns {boolean} matches
 *  */

// Verifica si el DOM está disponible (es decir, si el código se ejecuta en un navegador)
const canUseDom = () =>
	!!(
		typeof window !== "undefined" &&
		window.document &&
		window.document.createElement
	);

// Utiliza `useLayoutEffect` si el DOM está disponible, de lo contrario, utiliza `useEffect`
const useSafeLayoutEffect = canUseDom() ? useLayoutEffect : useEffect;

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);
	const mql = window.matchMedia(query);
	const handler = () => {
		setMatches(mql.matches);
	};
	useSafeLayoutEffect(() => {
		mql.addEventListener("change", handler);
		return () => mql.removeEventListener("change", handler);
	}, []);
	return matches;
};

export { useMediaQuery };
