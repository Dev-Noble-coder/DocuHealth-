import React, { useState } from "react";
import UserDashHead from "./Dashboard Part/UserDashHead";
import Data from "./UserSubscriptionData/UserData.json";
import logo from '../assets/logo.png'
import { Link, useLocation } from "react-router-dom";

const UserSubscriptionsDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path = "/user-home-dashboard") => location.pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
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
                         <li className={`group px-4 py-2   ${
                             isActive("/user-subscriptions-dashboard")
                               ? "bg-[#0000FF] text-white"
                               : "text-gray-700"
                           } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}>
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
                         <li className={`group px-4 py-2   ${
                             isActive("/user-logout-dashboard")
                               ? "bg-[#0000FF] text-white"
                               : "text-gray-700"
                           } text-gray-700 hover:bg-[#0000FF] hover:text-white rounded-lg flex items-center gap-2 justify-start`}>
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
          <section className="p-0 sm:p-8">
            <div className="p-5 sm:p-0">
              <p className="text-gray-500">Monday 25th, 2024</p>
            </div>
            <div className=" sm:border my-5 px-5 py-5 sm:rounded-3xl bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data.map((data, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl  ${
                      index === 0
                        ? "bg-[#F5F8F8]"
                        : "bg-gradient-to-b from-[#ECFAFF] to-[#EEEEFD]"
                    }`}
                  >
                    <div className="flex justify-between items-center ">
                      <p
                        className="text-sm text-gray-600"
                        style={{
                          color:
                            index === 1 || index === 2 ? "#FE9000 " : "inherit",
                          paddingBottom:
                            index === 1 || index === 2 ? "10px" : "inherit",
                        }}
                      >
                        {data.name}
                      </p>
                      {data.check === true ? (
                        <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-2xl font-semibold pb-1">
                      ₦{data.amount}{" "}
                        <span className="text-sm font-normal">
                          /{data.duration}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600 leading-6">
                        {data.details}
                      </p>
                    </div>
                    <hr />
                    <div className="py-5">
                      <p className="flex items-center text-[12px]">
                        {index === 0 || index === 2 ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : data.smallcheck === true ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : (
                          <i className="bx bx-x text-2xl text-red-600"></i>
                        )}
                        {data.det1}
                      </p>
                      <p className="flex items-center text-[12px]">
                        {data.smallcheck === true ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : (
                          <i className="bx bx-x text-2xl text-red-600"></i>
                        )}
                        {data.det2}
                      </p>
                      <p className="flex items-center text-[12px]">
                        {index === 0 || index === 2 ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : data.smallcheck === true ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : (
                          <i className="bx bx-x text-2xl text-red-600"></i>
                        )}
                        {data.det3}
                      </p>
                      <p className="flex items-center text-[12px]">
                        {data.smallcheck === true ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : (
                          <i className="bx bx-x text-2xl text-red-600"></i>
                        )}
                        {data.det4}
                      </p>
                      <p className="flex items-center text-[12px]">
                        {data.smallcheck === true ? (
                          <i className="bx bx-check text-[#0000FF] text-2xl"></i>
                        ) : (
                          <i className="bx bx-x text-2xl text-red-600"></i>
                        )}
                        {data.det5}
                      </p>
                    </div>
                    <div
                      className={` rounded-full my-4 ${
                        index === 0
                          ? "font-semibold" // No background or border for the first div
                          : index === 1
                          ? "border border-[#0000FF] text-[#0000FF] font-semibold // Border for the second div"
                          : "bg-[#0000FF] text-white font-semibold" // Background color and white text for the third div
                      }`}
                    >
                      <div className="py-3">
                        <p className="text-sm text-center">{data.button}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserSubscriptionsDashboard;