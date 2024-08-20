import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";

function App() { 

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
        {/* add more routes here */}
      </Route>     

    </Routes>
  );
}

export default App;
