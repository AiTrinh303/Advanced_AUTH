import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <RootLayout />
      </Routes>
    </>
  )
}

export default App;