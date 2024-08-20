import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";

function App() { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: < RootLayout />,
      children: [
        {
          path:"/",
          element:<DashboardPage/>
        },
        {
          path:"/list",
          element:<SignUpPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;