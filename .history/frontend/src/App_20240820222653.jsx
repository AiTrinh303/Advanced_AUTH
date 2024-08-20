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
import AdminDashboardPage from "./pages/AdminDashboardPage";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user} = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/dashboard' replace />;
	}

	return children;
};

//redirect authenticated admin users to the admin dashboard
const RedirectAuthenticatedAdmin = ({ children }) => {
	const { isAuthenticated, user, isAdmin} = useAuthStore();

	if (isAuthenticated && user.isVerified && user.isAdmin) {
		return <Navigate to='/admin' replace />;
	}

	return children;
};


function App() {

	const { isCheckingAuth, checkAuth, isCheckingAdmin, checkAuthAdmin} = useAuthStore();

	useEffect(() => {
		const authenticateUser = async () => {
			await checkAuth();
			await checkAuthAdmin();
	
		};

		authenticateUser();
	}, [checkAuth, checkAuthAdmin]);

	if (isCheckingAuth || isCheckingAdmin) return <LoadingSpinner />;

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route 
           	path="/dashboard" 
          	element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
		/>
			<Route 
			path="/admin" 
			element={
						<RedirectAuthenticatedUser>
							<AdminDashboardPage />
						</RedirectAuthenticatedUser>
					} 
        	/>
					
      
		
        <Route 
          path="/signup" 
          element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					} 
        />
        <Route 
          path="/verify-email" 
          element={<EmailVerificationPage />} 
        />
        <Route 
          path="/login" 
          element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
        />
		
        <Route 
          path="/forgot-password" 
          element={
						<RedirectAuthenticatedUser>
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