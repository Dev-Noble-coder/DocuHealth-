import React, { useState, useEffect } from "react";
import UserDashHead from "./Dashboard Part/UserDashHead";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const UserSubAcctDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path = "/user-home-dashboard") =>
    location.pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Submitted:", formData);
    // Add your submission logic here (e.g., send data to a backend or Firebase)

    // Close the overlay after submission
    setShowOverlay(false);

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      sex: "",
    });
  };

  const [subAccounts, setSubAccounts] = useState([]);
  const [error, SetError] = useState(false);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setSubAccounts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        SetError(true);
      });
  }, []);

  const [noticeDisplay, setNoticeDisplay] = useState(false);

  useEffect(() => {
    // Show notice immediately when the dashboard loads
    setNoticeDisplay(true);

    // Then show the notice every 24 hours (1 day)
    const interval = setInterval(() => {
      setNoticeDisplay(true);
    }, 86400000); // 86,400,000 ms = 24 hours

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const closeNoticeMessageToCreateAcct = () => {
    setNoticeDisplay(false);
    setShowOverlay(true);
  };
  const closeNoticeMessage = () => {
    setNoticeDisplay(false);
  };

  const [openPopover, setOpenPopover] = useState(null);

  const togglePopover = (index) => {
    setOpenPopover(openPopover === index ? null : index);
  };

  const noticeMessage = [
    {
      title: "Sub Account",
      instruction: "Read about the sub account feature below",
      benefitTitle: "Benefits of SUB Account :",
      benefit1:
        "Store and track your child's medical history, including vaccinations, allergies, and illnesses.",
      benefit2:
        " Easily access and share medical information with healthcare providers.",
      benefit3:
        " Transfer ownership to your child when they turn 18 and obtain their National Identification Number (NIN) with all their medical records/history intact and safe.",
      workTitle: "How it Works:",
      work1:
        " Create a SUB account for your child, providing their basic information.",
      work2:
        " View and easily get access to all of  their medical information when needed.",
      work3:
        "  When your child turns 18 and obtains their NIN, they can take ownership of their account and manage their own medical information.",
      lastMessage:
        "By using our SUB account feature, you can ensure your child's medical history is accurate, up-to-date, and easily accessible – giving you peace of mind and empowering your child to take control of their health as they grow older.",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeSidebar}
          ></div>
        )}
        <aside
          className={`fixed top-0 left-0 min-h-screen w-64 bg-white shadow-lg border z-20 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:translate-x-0 sm:static sm:block`}
        >
          <div className="p-4 flex justify-between items-center  ">
            <div className="flex justify-start items-start gap-2">
              <img src={logo} alt="" />
              <h1 className="text-xl font-bold text-blue-600">DocuHealth</h1>
            </div>
            <div className=" sm:hidden " onClick={closeSidebar}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9994 15L9 9M9.00064 15L15 9"
                  stroke="#1B2B40"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                  stroke="#1B2B40"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
          <nav className="mt-4">
            <ul>
              <Link to="/user-home-dashboard" onClick={closeSidebar}>
                <div className="px-4 my-4">
                  <li
                    className={`group px-4 py-2   ${
                      isActive("/user-home-dashboard")
                        ? "bg-[#0000FF] text-white"
                        : "text-gray-700"
                    } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="svg"
                        className={`group-hover:fill-white ${
                          isActive("/user-home-dashboard") ? "fill-white" : ""
                        }`}
                      >
                        <path
                          d="M2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333H8.33333C8.79358 10.8333 9.16667 10.4602 9.16667 10V3.33333C9.16667 2.8731 8.79358 2.5 8.33333 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V10ZM2.5 16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H8.33333C8.79358 17.5 9.16667 17.1269 9.16667 16.6667V13.3333C9.16667 12.8731 8.79358 12.5 8.33333 12.5H3.33333C2.8731 12.5 2.5 12.8731 2.5 13.33333V16.6667ZM10.8333 16.6667C10.8333 17.1269 11.2064 17.5 11.6667 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V10C17.5 9.53975 17.1269 9.16667 16.6667 9.16667H11.6667C11.2064 9.16667 10.8333 9.53975 10.8333 10V16.6667ZM11.6667 2.5C11.2064 2.5 10.8333 2.8731 10.8333 3.33333V6.66667C10.8333 7.1269 11.2064 7.5 11.6667 7.5H16.6667C17.1269 7.5 17.5 7.1269 17.5 6.66667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H11.6667Z"
                          className={`group-hover:fill-white ${
                            isActive("/user-home-dashboard")
                              ? "fill-white"
                              : "fill-[#647284]"
                          }`}
                        />
                      </svg>
                    </span>
                    My Medical Record
                  </li>
                </div>
              </Link>
              <Link to="/user-sub-account" onClick={closeSidebar}>
                <div className="px-4 my-4">
                  <li
                    className={`group px-4 py-2   ${
                      isActive("/user-sub-account")
                        ? "bg-[#0000FF] text-white"
                        : "text-gray-700"
                    } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`group-hover:fill-white ${
                          isActive("/user-sub-account")
                            ? "fill-white"
                            : "fill-[#647284]"
                        }`}
                      >
                        <path
                          d="M1.66675 18.3333C1.66675 14.6514 4.65151 11.6667 8.33341 11.6667C12.0153 11.6667 15.0001 14.6514 15.0001 18.3333H13.3334C13.3334 15.5719 11.0948 13.3333 8.33341 13.3333C5.57199 13.3333 3.33341 15.5719 3.33341 18.3333H1.66675ZM8.33341 10.8333C5.57091 10.8333 3.33341 8.59583 3.33341 5.83333C3.33341 3.07083 5.57091 0.833333 8.33341 0.833333C11.0959 0.833333 13.3334 3.07083 13.3334 5.83333C13.3334 8.59583 11.0959 10.8333 8.33341 10.8333ZM8.33341 9.16667C10.1751 9.16667 11.6667 7.675 11.6667 5.83333C11.6667 3.99167 10.1751 2.5 8.33341 2.5C6.49175 2.5 5.00008 3.99167 5.00008 5.83333C5.00008 7.675 6.49175 9.16667 8.33341 9.16667ZM15.2365 12.2523C17.5537 13.2967 19.1667 15.6267 19.1667 18.3333H17.5001C17.5001 16.3033 16.2903 14.5559 14.5524 13.7726L15.2365 12.2523ZM14.6636 2.84434C16.3287 3.53086 17.5001 5.16967 17.5001 7.08333C17.5001 9.47517 15.6702 11.4377 13.3334 11.648V9.9705C14.7473 9.7685 15.8334 8.55333 15.8334 7.08333C15.8334 5.93279 15.1681 4.93836 14.2009 4.46362L14.6636 2.84434Z"
                          className={`group-hover:fill-white ${
                            isActive("/user-sub-account")
                              ? "fill-white"
                              : "fill-[#647284]"
                          }`}
                        />
                      </svg>
                    </span>
                    Sub-Accounts
                  </li>
                </div>
              </Link>
              <Link to="/user-settings-dashboard" onClick={closeSidebar}>
                <div className="px-4 my-4">
                  <li
                    className={`group px-4 py-2   ${
                      isActive("/user-settings-dashboard")
                        ? "bg-[#0000FF] text-white"
                        : "text-gray-700"
                    } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`group-hover:fill-white ${
                          isActive("/user-settings-dashboard")
                            ? "fill-white"
                            : "fill-[#647284]"
                        }`}
                      >
                        <g clip-path="url(#clip0_274_2617)">
                          <path
                            d="M7.2386 3.33324L9.4108 1.16107C9.73621 0.835632 10.2639 0.835632 10.5893 1.16107L12.7615 3.33324H15.8334C16.2936 3.33324 16.6667 3.70634 16.6667 4.16657V7.23848L18.8389 9.41067C19.1643 9.73609 19.1643 10.2638 18.8389 10.5892L16.6667 12.7613V15.8333C16.6667 16.2935 16.2936 16.6666 15.8334 16.6666H12.7615L10.5893 18.8388C10.2639 19.1642 9.73621 19.1642 9.4108 18.8388L7.2386 16.6666H4.1667C3.70646 16.6666 3.33336 16.2935 3.33336 15.8333V12.7613L1.1612 10.5892C0.835754 10.2638 0.835754 9.73609 1.1612 9.41067L3.33336 7.23848V4.16657C3.33336 3.70634 3.70646 3.33324 4.1667 3.33324H7.2386ZM5.00003 4.99991V7.92884L2.92896 9.99992L5.00003 12.071V14.9999H7.92896L10 17.071L12.0711 14.9999H15V12.071L17.0711 9.99992L15 7.92884V4.99991H12.0711L10 2.92884L7.92896 4.99991H5.00003ZM10 13.3333C8.15908 13.3333 6.6667 11.8408 6.6667 9.99992C6.6667 8.15896 8.15908 6.66657 10 6.66657C11.841 6.66657 13.3334 8.15896 13.3334 9.99992C13.3334 11.8408 11.841 13.3333 10 13.3333ZM10 11.6666C10.9205 11.6666 11.6667 10.9204 11.6667 9.99992C11.6667 9.07942 10.9205 8.33326 10 8.33326C9.07955 8.33326 8.33338 9.07942 8.33338 9.99992C8.33338 10.9204 9.07955 11.6666 10 11.6666Z"
                            className={`group-hover:fill-white ${
                              isActive("/user-settings-dashboard")
                                ? "fill-white"
                                : "fill-[#647284]"
                            }`}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_274_2617">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Settings
                  </li>
                </div>
              </Link>
              <Link to="/user-subscriptions-dashboard" onClick={closeSidebar}>
                <div className="px-4 my-4">
                  <li
                    className={`group px-4 py-2   ${
                      isActive("/user-subscriptions-dashboard")
                        ? "bg-[#0000FF] text-white"
                        : "text-gray-700"
                    } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`group-hover:fill-white ${
                          isActive("/user-subscriptions-dashboard")
                            ? "fill-white"
                            : "fill-[#647284]"
                        }`}
                      >
                        <path
                          d="M2.50411 2.50244H17.5041C17.9644 2.50244 18.3375 2.87553 18.3375 3.33577V16.6691C18.3375 17.1293 17.9644 17.5024 17.5041 17.5024H2.50411C2.04388 17.5024 1.67078 17.1293 1.67078 16.6691V3.33577C1.67078 2.87553 2.04388 2.50244 2.50411 2.50244ZM3.33744 4.16911V15.8357H16.6708V4.16911H3.33744ZM7.08744 11.6691H11.6708C11.9009 11.6691 12.0875 11.4826 12.0875 11.2524C12.0875 11.0223 11.9009 10.8357 11.6708 10.8357H8.33746C7.18685 10.8357 6.25411 9.90307 6.25411 8.7524C6.25411 7.60184 7.18685 6.66911 8.33746 6.66911H9.17079V5.00244H10.8375V6.66911H12.9208V8.33573H8.33746C8.10733 8.33573 7.92078 8.52232 7.92078 8.7524C7.92078 8.98257 8.10733 9.16907 8.33746 9.16907H11.6708C12.8214 9.16907 13.7541 10.1018 13.7541 11.2524C13.7541 12.4031 12.8214 13.3357 11.6708 13.3357H10.8375V15.0024H9.17079V13.3357H7.08744V11.6691Z"
                          className={`group-hover:fill-white ${
                            isActive("/user-subscriptions-dashboard")
                              ? "fill-white"
                              : "fill-[#647284]"
                          }`}
                        />
                      </svg>
                    </span>
                    Subscriptions
                  </li>
                </div>
              </Link>
              <Link to="/user-logout-dashboard" onClick={closeSidebar}>
                <div className="px-4 my-4">
                  <li
                    className={`group px-4 py-2   ${
                      isActive("/user-logout-dashboard")
                        ? "bg-[#0000FF] text-white"
                        : "text-gray-700"
                    } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`group-hover:fill-white ${
                        isActive("/user-logout-dashboard")
                          ? "fill-white"
                          : "fill-[#647284]"
                      }`}
                    >
                      <path
                        d="M3.33329 12.4998H4.99996V16.6665H15V3.33317H4.99996V7.49984H3.33329V2.49984C3.33329 2.0396 3.70639 1.6665 4.16663 1.6665H15.8333C16.2935 1.6665 16.6666 2.0396 16.6666 2.49984V17.4998C16.6666 17.9601 16.2935 18.3332 15.8333 18.3332H4.16663C3.70639 18.3332 3.33329 17.9601 3.33329 17.4998V12.4998ZM8.33329 9.1665V6.6665L12.5 9.99984L8.33329 13.3332V10.8332H1.66663V9.1665H8.33329Z"
                        className={`group-hover:fill-white ${
                          isActive("/user-logout-dashboard")
                            ? "fill-white"
                            : "fill-[#647284]"
                        }`}
                      />
                    </svg>
                    Log-out
                  </li>
                </div>
              </Link>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <UserDashHead
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            closeSidebar={closeSidebar}
          />

          {/* Content */}
          <section className="pt-6 px-8 w-full relative bg-white shadow min-h-screen">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
              <div className="pb-3 sm:p-0 w-full sm:w-auto">
                <p className="text-gray-500">Monday 25th, 2024</p>
              </div>
              <div className="w-full sm:w-auto">
                <button
                  onClick={toggleOverlay}
                  className="bg-[#0000FF] text-white py-2 px-4 rounded-full w-full sm:w-auto"
                >
                  Create A Sub Account
                </button>
              </div>
            </div>

            {showOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                  {/* Cancel Icon */}
                  <div className="flex justify-between items-center pb-8">
                    <div className="flex-1 text-center">
                      <h2 className="text-lg font-semibold">
                        Create Sub Account
                      </h2>
                    </div>
                    <button
                      onClick={toggleOverlay}
                      className="text-gray-500 hover:text-black"
                    >
                      <i className="bx bx-x text-2xl"></i>
                    </button>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className=" sm:grid sm:grid-cols-2 sm:gap-3"
                  >
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 h-12 focus:outline-none focus:border-[#0000FF]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 h-12 focus:outline-none focus:border-[#0000FF]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 h-12 focus:outline-none focus:border-[#0000FF]"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sex
                      </label>
                      <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 h-12 focus:outline-none focus:border-[#0000FF] "
                        required
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4 col-span-2">
                      <p className="block text-sm font-medium text-gray-700 mb-1">
                        Please Note :
                      </p>

                      <div
                        className="text-sm text-gray-500 mt-2 border border-gray-300 rounded-lg p-3
                      "
                      >
                        Please do note that this account will be on
                        read-only-mode. This will change once the account is
                        upgraded once the owner is 18 years old.
                      </div>
                    </div>
                    <div className="col-span-2 text-center bg-[#0000FF] text-white py-3 px-4 rounded-full">
                      <button type="submit">Create Account</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {noticeDisplay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
                  {noticeMessage.map((message, index) => (
                    <div key={index} className="">
                      <div className="flex justify-start items-center gap-2 pb-1">
                        <p>
                          <i className="bx bx-info-circle text-3xl"></i>
                        </p>
                        <p className="font-semibold">{message.benefitTitle}</p>
                      </div>
                      <div className="pb-3">
                        <p className="text-sm font-medium">
                          {message.instruction}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 pb-4">
                        <p className="pb-1">{message.benefitTitle}</p>
                        <p className="pb-1">- {message.benefit1}</p>
                        <p className="pb-1">- {message.benefit2}</p>
                        <p className="pb-1">- {message.benefit3}</p>
                      </div>
                      <div className="text-sm text-gray-600 pb-4">
                        <p className="pb-1">{message.workTitle}</p>
                        <p className="pb-1">1 {message.work1}</p>
                        <p className="pb-1">2 {message.work2}</p>
                        <p className="pb-1">3 {message.work3}</p>
                      </div>
                      <p className="pb-4">
                        <p className="text-sm text-gray-600">
                          {message.lastMessage}
                        </p>
                      </p>
                      <div className="text-sm flex justify-start items-center gap-4">
                        <button
                          className="bg-[#0000FF] text-white py-2 px-3 rounded-full"
                          onClick={closeNoticeMessageToCreateAcct}
                        >
                          Create a sub account
                        </button>
                        <button
                          className="border border-[#0000FF] text-[#0000FF] py-2 px-3 rounded-full"
                          onClick={closeNoticeMessage}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="hidden sm:block py-8 px-6 border rounded-2xl">
              <h1 className="text-xl font-semibold mb-4">Sub-Accounts</h1>
              <div className="relative">
                <table className="min-w-full">
                  <thead className="text-left text-gray-500">
                    <tr>
                      <th className="px-4 py-2 font-normal">Name</th>
                      <th className="px-4 py-2 font-normal">HIN</th>
                      <th className="px-4 py-2 font-normal">Date of Birth</th>
                      <th className="px-4 py-2 font-normal">Sex</th>
                      <th className="px-4 py-2 font-normal">Date Created</th>
                    </tr>
                  </thead>

                  <tbody>
                    {subAccounts.map((account, index) => (
                      <tr key={index} className="relative">
                        <td className="border-b border-gray-300 px-4 pb-3 pt-3">
                          {account.name}
                        </td>
                        <td className="border-b border-gray-300 px-4 pb-3 pt-3">
                          {account.HIN}
                        </td>
                        <td className="border-b border-gray-300 px-4 pb-3 pt-3">
                          {account.dateOfBirth}
                        </td>
                        <td className="border-b border-gray-300 px-4 pb-3 pt-3">
                          {account.sex}
                        </td>
                        <td className="border-b border-gray-300 px-4 pb-3 pt-3 relative">
                          {account.dateCreated}
                          <i
                            className={`bx bx-dots-vertical-rounded ml-3  p-2 ${
                              openPopover === index
                                ? "bg-slate-300 p-2 rounded-full"
                                : ""
                            }`}
                            onClick={() => togglePopover(index)}
                          ></i>

                          {openPopover === index && (
                            <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-lg p-2 w-52 text-center z-30">
                              <Link to="">
                                <p className="text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer">
                                  Check Medical History
                                </p>
                              </Link>

                              <Link to="/user-sub-account-upgrade">
                                {" "}
                                <p className="text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer">
                                  Upgrade Sub Account
                                </p>
                              </Link>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {error === true && (
                  <p className="text-center py-10 text-red-700 font-semibold">
                    Error Fetching Data
                  </p>
                )}
              </div>
            </div>

            <div className=" py-5 border-t-2 sm:hidden">
              <p className="font-semibold">Sub accounts</p>
              {subAccounts.map((account, index) => (
                <div key={index} className="bg-white shadow px-4 py-2 my-3">
                  <div className=" flex justify-between items-center py-3 relative ">
                    <p>HIN : {account.HIN}</p>
                    <p>
                    <i
                            className={`bx bx-dots-vertical-rounded ml-3  p-2 ${
                              openPopover === index
                                ? "bg-slate-300 p-2 rounded-full"
                                : ""
                            }`}
                            onClick={() => togglePopover(index)}
                          ></i>
                    </p>
                    {openPopover === index && (
                      <div className="absolute right-0 top-10  mt-2 bg-white border shadow-md rounded-lg p-2 w-52 text-center z-30">
                        <Link to="">
                          <p className="text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer">
                            Check Medical History
                          </p>
                        </Link>

                        <Link to="/user-sub-account-upgrade">
                          {" "}
                          <p className="text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer">
                            Upgrade Sub Account
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-5 py-3">
                    <div className="flex flex-col">
                      <p className="text-gray-500">Name</p>
                      <p>{account.name}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500">Date Of Birth</p>
                      <p>{account.dateOfBirth}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500">Sex</p>
                      <p>{account.sex}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500">Name</p>
                      <p>{account.dateCreated}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserSubAcctDashboard;
