import "./App.css";
import Home from "./screens/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrders from "./screens/MyOrders";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/orders",
    element: <MyOrders />,
  }
]);

function App() {
  return (
    <CartProvider>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </CartProvider>
  );
}

export default App;
