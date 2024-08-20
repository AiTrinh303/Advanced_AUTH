import { create } from "zustand";
import axios from "axios";

//API_URL is different in development and production
const API_URL = "http://localhost:5000/user"

// Send cookies with every request
axios.defaults.withCredentials = true; 

//STATE MANAGEMENT
export const useUserStore = create((set) => ({
    user: null,
    error: null,
    isLoading: false,
    message: null,
    isAdmin: false,

    //GET USER BY ID
    getUser : async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/find/${id}`);
            set({ user: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error getting user", isLoading: false });
            throw error;
        }
    },

    //UPDATE USER BY ID
    updateUser : async (id, user) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.put(`${API_URL}/update/${id}`, user);
            set({ user: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error updating user", isLoading: false });
            throw error;
        }
    },

    //DELETE USER BY ID
    deleteUser : async (id) => {
        set({ isLoading: true, error: null });
        try {
            await axios.delete(`${API_URL}/delete/${id}`);
            set({ user: null, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error deleting user", isLoading: false });
            throw error;
        }
    }

    //GET USER STATS
    getUserStats : async () => {
        set({ isLoading: true, error: null, });
        try {
            const response = await axios.get(`${API_URL}/stats`);
            set({ user: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error getting user stats", isLoading: false });
            throw error;
        }
    }
}));


