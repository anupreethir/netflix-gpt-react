import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        }, {
            path: "/browser",
            element: <Browse />
        },
        {
            path: "/shimmer",
            element: <ShimmerUi />
        }
    ]);


    return (
        <div className="w-full h-full">
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
};
export default Body;
