import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // React Icons
import dashb from "../../assets/dashb.png";
import { useNavigate } from "react-router-dom";

const NP = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(false);

  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    if (isMobile) {
      const timer = setTimeout(() => {
        setNotificationVisible(true);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    setNotification(true);
    setNotificationVisible(false);

    
  };

  const handleNavigation = () => {
    setNotification(false);
    navigate("/hospital-login");
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex">
          {/* Left Side */}
          <div className=" hidden sm:flex flex-1 h-screen  items-center justify-center">
            <div className="w-3/4" id="temp">
              <div className="pb-10">
                <img src={logo} alt="Logo" className="" />
              </div>
              <h2 className="text-2xl font-bold mb-2 ">
                Set Up A New Password
              </h2>
              <p className="text-gray-600 mb-6">
                Try to set up a password you won’t forget for easy access to
                your dashboard.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Password Input */}
                <div className="relative">
                  <p className="font-semibold pb-1">Password:</p>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border rounded-lg pl-10 outline-none focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-4 w-4 text-gray-400" />
                      ) : (
                        <FaEye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="relative">
                  <p className="font-semibold pb-1">Confirm Password:</p>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border rounded-lg pl-10 outline-none focus:border-blue-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-4 w-4 text-gray-400" />
                      ) : (
                        <FaEye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0000FF] text-white py-3 rounded-full hover:bg-blue-700"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="flex-1 h-screen flex flex-col justify-center items-center p-4"
            style={{
              background: "linear-gradient(to bottom, #0000FF, #718FCC)",
            }}
          >
            <div className="">
              <p className="text-white font-semibold text-2xl pb-1">
                The simplest way to manage <br /> medical records
              </p>
              <p className="text-white font-light">
                No better way to attend to, and keep records of medical records.
              </p>
            </div>

            <div className="max-h-[470px] flex justify-center items-center pt-2">
              <img
                src={dashb}
                alt="Dashboard"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Notification Modal */}
        {notification && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white py-6 px-14 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <div className="pb-2">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50.4014" r="50" fill="#15C621" />
                  <path
                    d="M44.6659 58.857L69.1789 34.344L72.9501 38.1152L44.6659 66.3994L27.6953 49.429L31.4666 45.6578L44.6659 58.857Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[#15C621] mb-4 text-sm sm:text-base">
                You have successfully reset your password!
              </p>
              <div className="flex justify-center w-full">
                <button
                  className="bg-[#0000FF] w-full rounded-full text-white px-4 py-2"
                  onClick={handleNavigation}
                >
                  Go To SignIn
                </button>
              </div>
            </div>
          </div>
        )}

        {notificationVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="fixed bottom-0 left-0 right-0 bg-white text-black  py-4 rounded-t-3xl shadow-md animate-slide-up ">
              <div className="flex justify-center items-center gap-1 pb-4">
                <div>
                  <img src={logo} alt="DocuHealth Logo" />
                </div>
                <h1 className="text-[#0000FF] text-3xl font-bold">
                  DocuHealth
                </h1>
              </div>
              <div className="px-5" id="temp">
               
                <h2 className="text-xl sm:text-2xl  mb-2 ">
                  Set Up A New Password
                </h2>
                <p className="text-gray-600 mb-6">
                  Try to set up a password you won’t forget for easy access to
                  your dashboard.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Password Input */}
                  <div className="relative">
                    <p className="pb-1">Password:</p>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border rounded-lg pl-10 outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-4 w-4 text-gray-400" />
                        ) : (
                          <FaEye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <p className="pb-1">Confirm Password:</p>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full px-4 py-3 border rounded-lg pl-10 outline-none focus:border-blue-500"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-4 w-4 text-gray-400" />
                        ) : (
                          <FaEye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#0000FF] text-white py-3 rounded-full hover:bg-blue-700"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NP;
