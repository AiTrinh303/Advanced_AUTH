import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Stack
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

const ProfileUpdatePage = () => {
	const { user } = useAuthStore();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const { name, email, password} = Object.fromEntries(formData);
		try {
			const user = await axios.put(`http://localhost:5000/user/update/${user.id}`, {
			  name,
			  email,
			  password,
			});
			navigate("/dashboard");
		  } catch (err) {
			console.log(err);
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
            <Stack direction="row" spacing={20} align="center" className="mb-6">
              <Center>
                <Avatar boxSize="80px" className="mr-6 rounded-full bg-gray-700" src="">
                  <AvatarBadge
                    as={IconButton}
                    size="xs"
                    rounded="full"
                    top="px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center>
                <Button size="sm" rounded="full" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  Change Icon
                </Button>
              </Center>
            </Stack>
          </motion.div>
        </div>    

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
                defaultValue={user.name}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-gray-300 mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-gray-300 mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">Password</label>
              <input
                name="password"
                type="password"
				        defaultValue="......"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </motion.div>

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
            >
              Update
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </form>
  );
};

export default ProfileUpdatePage;