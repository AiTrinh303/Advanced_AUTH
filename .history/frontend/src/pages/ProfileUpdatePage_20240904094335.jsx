import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProfileUpdatePage = () => {
  // Get the current user and updateUser function from the Zustand store
  const { user: currentUser, updateUser, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // Call updateUser with the collected data
      await updateUser({ id: currentUser._id, name, email, password });
      alert("Profile updated successfully!");
      navigate("/"); 
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
          Update Profile
        </h2>
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              {/* Avatar Section */}
              <div className="flex items-center">
                <img
                  className="w-24 h-24 rounded-full bg-gray-700 mr-6"
                  src={}
                  alt="User Avatar"
                />
              </div>

              {/* Change Avatar Button */}
              <div className="flex items-center">
                <button
                  className="px-8 py-2 text-sm bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Change Avatar
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile Information Section */}
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3">Profile Information</h3>

            <div className="text-gray-300 mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                name="name"
                type="text"
                defaultValue={currentUser?.name || ""}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-gray-300 mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={currentUser?.email || ""}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-gray-300 mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">Password</label>
              <input
                name="password"
                type="password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </motion.div>

          {/* Update Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
              font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Updating..." : "Update"}
            </motion.button>
          </motion.div>
        </div>

        {/* Display error message if there's an error */}
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </motion.div>
    </form>
  );
};

export default ProfileUpdatePage;