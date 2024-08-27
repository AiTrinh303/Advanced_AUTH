import React from 'react'
import { motion } from 'framer-motion'

const ProfilePage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        const { username, email, password } = Object.fromEntries(formData);
    
        try {
          const res = await apiRequest.put(`/users/${currentUser.id}`, {
            username,
            email,
            password,
            avatar:avatar[0]
          });
          updateUser(res.data);
          navigate("/profile");
        } catch (err) {
          console.log(err);
          setError(err.response.data.message);
        }
      };

  return (
    <motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
		>
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        {/* <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "daxnlq46a",
            uploadPreset: "Ai_Estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        /> */}
      </div>
    </div>
    </motion.div>
  )
}

export default ProfilePage
