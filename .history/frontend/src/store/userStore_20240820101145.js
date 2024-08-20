import { create } from "zustand";
import axios from "axios";

//API_URL is different in development and production
const API_URL = "http://localhost:5000/user"

// Send cookies with every request
axios.defaults.withCredentials = true; 

//STATE MANAGEMENT
export const useUserStore = create((set) => ({
    


//UPDATE USER
updateUser : async (id, user) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
};