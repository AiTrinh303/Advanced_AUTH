import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";

function App() { 
  return (
    <>
        <RootLayout
         />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App;