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
          path:"/signup",
          element:<SignUpPage/>
        },
        {
          path:"/verify-email",
          element:<EmailVerificationPage/>
        },
       ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;