import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import BoxLogin from "../Login/BoxLogin";
import swal from "sweetalert";
import { clearCart } from "../../redux-tookit/features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Person4Icon from "@mui/icons-material/Person4";

import LogoutIcon from "@mui/icons-material/Logout";
import {
  updateStateOpenLogin,
  doLogout,
} from "../../redux-tookit/features/AthSlice";
const Header = () => {
  const [showHoverContent, setShowHoverContent] = useState(false);
  const dispatch = useDispatch();

  const { isOpenLogin, email } = useSelector((state) => state.AthSlice);

  const handleClickOpenLogin = () => {
    dispatch(updateStateOpenLogin(true));
  };

  const navigate = useNavigate();
  const handleClearLocal = () => {
    dispatch(doLogout());
    swal("Logout success!", "", "success");
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      <header className="bg-orange-500 w-full px-2 sm:px-4">
        {/* contact */}
        <div className="md:max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center gap-2">
            <div className="contact-left ">
              <ul className="flex items-center text-sm sm:text-lg gap-3 sm:gap-5 text-white ">
                <li className="py-2 sm:py-3 cursor-pointer hover:underline">
                  Kênh Người Bán
                </li>
                <li className="py-2 sm:py-3 cursor-pointer hover:underline">
                  Tải ứng dụng
                </li>
                <li className="py-2 sm:py-3cursor-pointer hover:underline flex items-center">
                  Kết nối
                  <FacebookIcon
                    sx={{
                      fontSize: {
                        lg: 25,
                        md: 20,
                        sm: 15,
                        xs: 13,
                      },
                    }}
                  />
                </li>
              </ul>
            </div>
            <div className="contact-right">
              <ul className="flex items-center text-sm sm:text-lg  gap-5 text-white ">
                <li className="py-2 sm:py-3 cursor-pointer hover:underline flex items-center">
                  <CircleNotificationsIcon
                    sx={{
                      fontSize: {
                        lg: 25,
                        md: 20,
                        sm: 15,
                        xs: 13,
                      },
                    }}
                  />
                  Thông báo
                </li>
                <li className="py-2 sm:py-3 cursor-pointer hover:underline flex items-center">
                  <HelpIcon
                    sx={{
                      fontSize: {
                        lg: 25,
                        md: 20,
                        sm: 15,
                        xs: 13,
                      },
                    }}
                  />
                  Hỗ trợ
                </li>
                <li className="py-2 sm:py-3 cursor-pointer hover:underline flex items-center">
                  {email ? (
                    <div
                      onMouseEnter={() => setShowHoverContent(true)}
                      onMouseLeave={() => setShowHoverContent(false)}
                    >
                      <div>
                        <AccountCircleIcon
                          sx={{
                            fontSize: {
                              lg: 25,
                              md: 20,
                              sm: 15,
                              xs: 13,
                            },
                          }}
                        />
                        {email}
                      </div>
                      <div>
                        {showHoverContent && (
                          <>
                            <div className="absolute top-[45px] md:top-[35px] md:right-[150px] z-50 mt-2 w-[115px] md:w-[125px] bg-white rounded-lg shadow-lg p-2">
                              <div className="flex items-center gap-2 rounded-md">
                                <div className="flex flex-col">
                                  <Link to={"/profile"} className="flex">
                                    <h2 className="flex  items-center text-black px-4 hover:bg-slate-200 rounded-md">
                                      <Person4Icon
                                        sx={{
                                          fontSize: {
                                            lg: 25,
                                            md: 20,
                                            sm: 15,
                                            xs: 13,
                                          },
                                        }}
                                      />{" "}
                                      Profile
                                    </h2>
                                  </Link>
                                  <h2
                                    onClick={handleClearLocal}
                                    className="flex items-center text-black px-4 hover:bg-slate-200 rounded-md"
                                  >
                                    <LogoutIcon
                                      sx={{
                                        fontSize: {
                                          lg: 25,
                                          md: 20,
                                          sm: 15,
                                          xs: 13,
                                        },
                                      }}
                                    />
                                    Logout
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <span className="absolute md:top-[40px] right-[30px] md:right-[160px] w-4 h-4 bg-white transform rotate-45"></span>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <span onClick={handleClickOpenLogin}>
                      <AccountCircleIcon
                        sx={{
                          fontSize: {
                            lg: 25,
                            md: 20,
                            sm: 15,
                            xs: 13,
                          },
                        }}
                      />
                      Login
                    </span>
                  )}

                  <BoxLogin
                    handleCloseBox={() => {
                      dispatch(updateStateOpenLogin(false));
                    }}
                    openState={isOpenLogin}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* header search */}
          <Navbar />

          {/* list category  */}
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
