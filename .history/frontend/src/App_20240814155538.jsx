import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() { 

  return (
    <Routes>
      <Route element={<RootLayout />}>
        
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
        <Route 
          path='/verify-email' 
          element={<EmailVerificationPage/>} 
        />
      </Route>     

    </Routes>
  );
}

export default App;
