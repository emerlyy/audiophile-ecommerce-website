import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as api from "./api";
import "./index.css";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PageTemplate from "./pages/templates/PageTemplate";
import { store } from "./store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageTemplate />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: ":category",
				element: <CategoryPage />,
				loader: ({ params }) => {
					return api.getProductsByCategory(params.category);
				},
			},
			{
				path: ":category/:slug",
				element: <ProductPage />,
				loader: ({ params }) => {
					return api.getProductBySlug(params.slug);
				},
			},
			{
				path: "/checkout",
				element: <CheckoutPage />,
			},
		],
		errorElement: <>Page not found</>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
