import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
// import AdminDashboardPage from "./pages/AdminDashboardPage";

// // protect routes that require authentication
// const ProtectedRoute = ({ children }) => {
// 	const { isAuthenticated, user } = useAuthStore();

// 	if (!isAuthenticated) {
// 		return <Navigate to='/login' replace />;
// 	}

// 	if (!user.isVerified) {
// 		return <Navigate to='/verify-email' replace />;
// 	}

// 	return children;
// };

// // redirect authenticated users to the home page
// const RedirectAuthenticatedUser = ({ children }) => {
// 	const { isAuthenticated, user} = useAuthStore();

// 	if (isAuthenticated && user.isVerified) {
// 		return <Navigate to='/' replace />;
// 	}

// 	return children;
// };




function App() {

	const { isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();

	useEffect(() => {
	 checkAuth();	
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	console.log(isAuthenticated);
	console.log(user);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route 
           	path="/" 
          	element={
						
							<DashboardPage />
						
					}
		/>


      		
        <Route 
          path="/signup" 
          element={
					
							<SignUpPage />
					
					} 
        />

        <Route 
          path="/verify-email" 
          element={<EmailVerificationPage />} 
        />
		
        <Route 
          path="/login" 
          element={
						
							<LoginPage />
						
					}
        />
		
        <Route 
          path="/forgot-password" 
          element={
						
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					} 
        />
        <Route 
          path="/reset-password/:token" 
          element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					} 
        />
        {/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;