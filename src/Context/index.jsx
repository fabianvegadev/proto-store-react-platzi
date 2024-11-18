import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
	const accountInLocalStorage = localStorage.getItem("account");
	const signOutInLocalStorage = localStorage.getItem("sign-out");
	let parsedAccount;
	let parsedSignOut;

	if (!accountInLocalStorage) {
		localStorage.setItem("account", JSON.stringify({}));
		parsedAccount = {};
	} else {
		parsedAccount = JSON.parse(accountInLocalStorage);
	}

	if (!signOutInLocalStorage) {
		localStorage.setItem("sign-out", JSON.stringify(false));
		parsedSignOut = false;
	} else {
		parsedSignOut = JSON.parse(signOutInLocalStorage);
	}
};

export const ShoppingCartProvider = ({ children }) => {
	// My account
	const [account, setAccount] = useState({});

	// Sign out
	const [signOut, setSignOut] = useState(false);

	// Shopping Cart - Increment quantity
	const [count, setCount] = useState(0);

	// User Side Menu - Open/close
	const [isNavbarSideMenuOpen, setIsNavbarSideMenuOpen] = useState(false);

	const openNavbar = () => {
		setIsNavbarSideMenuOpen(!isNavbarSideMenuOpen);
	};
	const closeNavbar = () => {
		setIsNavbarSideMenuOpen(false);
	};

	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Checkout Side Menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckout = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckout = () => setIsCheckoutSideMenuOpen(false);

	// Product Detail - Show product
	const [productToShow, setProductToShow] = useState({});

	// Shopping Cart - Add products to cart
	const [cartProducts, setCartProducts] = useState([]);

	// Shopping Cart - Order
	const [order, setOrder] = useState([]);

	// Get products
	const [items, setItems] = useState(null);
	const [filteredItems, setFilteredItems] = useState(null);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = useState(null);

	// Get products by category
	const [searchByCategory, setSearchByCategory] = useState(null);

	const handleCategory = (category) => {
		closeNavbar();
		setSearchByCategory(category);
	};

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter((item) =>
			item.title.toLowerCase().includes(searchByTitle.toLowerCase())
		);
	};

	const filteredItemsByCategory = (items, searchByCategory) => {
		setSearchByTitle(null);
		return items?.filter(
			(item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
		);
	};

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
		if (searchType === "BY_TITLE_AND_CATEGORY") {
			return filteredItemsByCategory(items, searchByCategory).filter((item) =>
				item.title.toLowerCase().includes(searchByTitle.toLowerCase())
			);
		}
		if (searchType === "BY_TITLE") {
			return filteredItemsByTitle(items, searchByTitle);
		}
		if (searchType === "BY_CATEGORY") {
			return filteredItemsByCategory(items, searchByCategory);
		}
		if (!searchType) {
			return items;
		}
	};

	useEffect(() => {
		if (searchByTitle && searchByCategory)
			setFilteredItems(
				filterBy(
					"BY_TITLE_AND_CATEGORY",
					items,
					searchByTitle,
					searchByCategory
				)
			);
		if (searchByTitle && !searchByCategory)
			setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, null));
		if (searchByCategory && !searchByTitle)
			setFilteredItems(filterBy("BY_CATEGORY", items, null, searchByCategory));
		if (!searchByCategory && !searchByTitle)
			setFilteredItems(filterBy(null, items, null, null));
	}, [items, searchByTitle, searchByCategory]);

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isNavbarSideMenuOpen,
				openNavbar,
				closeNavbar,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				isCheckoutSideMenuOpen,
				openCheckout,
				closeCheckout,
				order,
				setOrder,
				items,
				setItems,
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				setFilteredItems,
				searchByCategory,
				setSearchByCategory,
				handleCategory,
				account,
				setAccount,
				signOut,
				setSignOut,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
