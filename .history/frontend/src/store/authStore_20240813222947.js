import { create } from "zustand";
import axios from "axios";

//API_URL is different in development and production
const API_
// const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";

// Send cookies with every request
axios.defaults.withCredentials = true; 

//STATE MANAGEMENT
export const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	//SIGNUP
	signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} 
		catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	//LOGIN
	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	//LOGOUT
	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} 
		catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},

	//VERIFY EMAIL
	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} 
		catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	//CHECK AUTHENTICATION
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} 
		catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},

	//FORGOT PASSWORD
	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},

	//RESET PASSWORD
	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},
}));


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthComponent = () => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/auth" : "/api/auth";
//   axios.defaults.withCredentials = true;

//   const signup = async (email, password, name) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(`${API_URL}/signup`, { email, password, name });
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       setError(error.response.data.message || "Error signing up");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(`${API_URL}/login`, { email, password });
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       setError(error.response?.data?.message || "Error logging in");
//     } finally {
//       setIsLoading(false);
//     }
//   };



//   return (
//     <div>
     
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthComponent = () => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/auth" : "/api/auth";
//   axios.defaults.withCredentials = true;

//   const signup = async (email, password, name) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(`${API_URL}/signup`, { email, password, name });
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       setError(error.response.data.message || "Error signing up");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(`${API_URL}/login`, { email, password });
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       setError(error.response?.data?.message || "Error logging in");
//     } finally {
//       setIsLoading(false);
//     }
//   };



//   return (
//     <div>
     
//     </div>
//   );
// };
