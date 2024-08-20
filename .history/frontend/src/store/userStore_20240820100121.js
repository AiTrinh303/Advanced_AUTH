import { create } from "zustand";
import axios from "axios";

//API_URL is different in development and production
const API_URL = "http://localhost:5000/user"

// Send cookies with every request
axios.defaults.withCredentials = true; 

