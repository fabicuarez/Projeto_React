import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Create from "./components/create";
import Main from "./components/main";
import Read from "./components/read";
import Update from "./components/update";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
        path: "create",
        element: <Create />,
    },
    {
        path: "read",
        element: <Read />,
    },
    {
        path: "update",
        element: <Update />,
    },
]);

export default <RouterProvider router={router} /> 

   