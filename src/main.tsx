import data from "@/data/data.json";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import PageTemplate from "./pages/templates/PageTemplate";
import { store } from "./store";
import { Product } from "./types";

import "./index.css";

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
					return (data as Product[])
						.filter((item) => item.category === params.category)
						.sort((a, b) => b.id - a.id);
				},
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
