import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import ProductsPage from "./pages/Products.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";
import ProductDetailPage from "./pages/ProductDetail.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: ""
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
