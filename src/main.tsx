import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";

import "./index.css";
import HomePage from "./pages/HomePage";
import PageTemplate from "./pages/templates/PageTemplate";

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
				path: "headphones",
				element: <>Head</>,
			},
		],
		errorElement:<>Page not found</>
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
