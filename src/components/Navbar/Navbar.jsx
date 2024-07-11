import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import getApiAll from "../../services/GetApiAll";
import { listCategory } from "../../redux-tookit/features/CategorySlice";
import logo from "../../assets/logo2png.png";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { updateStateOpenLogin } from "../../redux-tookit/features/AthSlice";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showHoverContent, setShowHoverContent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.CartSlice.carts);
  const listCate = useSelector((state) => state.CategorySlice.categorys);
  const { isOpenLogin, email } = useSelector((state) => state.AthSlice);

  const getCateAll = async () => {
    const res = await getApiAll.getApiCategory();
    dispatch(listCategory(res));
  };

  const getValueSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`search/${search}`);
      setSearch("");
    } else {
      toast.error("Vui lòng nhập từ khóa để tìm kiểm nha...!!", {
        duration: 2000,
        position: "top-center",
        style: {
          fontSize: "14px",
        },
      });
    }
  };

  const handleCartClick = (e) => {
    if (!email) {
      e.preventDefault();
      toast.error("Vui lòng đăng nhập để xem!!", {
        duration: 2000,
        position: "top-center",
        style: {
          fontSize: "14px",
        },
      });
      dispatch(updateStateOpenLogin(true));
    }
  };

  useEffect(() => {
    getCateAll();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <div className="w-1/4">
          <Link to={"/"}>
            <h1 className=" text-2xl sm:text-4xl  font-bold text-white flex items-center">
              Soppe
            </h1>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative flex items-center">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full p-2 rounded outline-none flex-grow sm:w-3/4 md:w-full"
            onChange={getValueSearch}
            value={search}
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="focus:outline-none text-white bg-orange-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-4 py-1 ml-2 md:ml-0 md:absolute md:right-3 md:top-1/2 md:transform md:-translate-y-1/2 md:bg-orange-500"
          >
            <SavedSearchIcon style={{ fontSize: "20px" }} />
          </button>
        </div>

        <div className="w-1/4 flex justify-center items-center relative">
          <div
            className="relative w-16 cursor-pointer"
            onMouseEnter={() => setShowHoverContent(true)}
            onMouseLeave={() => setShowHoverContent(false)}
          >
            <Link to={"/cart"} onClick={handleCartClick}>
              <ShoppingCartIcon
                style={{ color: "white" }}
                sx={{
                  fontSize: {
                    lg: 40,
                    md: 35,
                    sm: 30,
                  },
                }}
              />
              <span className="absolute w-8  h-4 bg-white flex justify-center items-center rounded-xl top-0 right-4 sm:right-2 text-xs font-bold">
                {carts.length}
              </span>
            </Link>
            {email ? (
              <div>
                {" "}
                {showHoverContent && (
                  <>
                    <div className="absolute md:top-[35px] right-0 md:right-[-50px] z-10 mt-2 w-[200px] md:w-[400px] bg-white rounded-lg shadow-lg p-4 ">
                      {carts && carts.length > 0 ? (
                        carts.slice(0, 5).map((item) => (
                          <Link to={`/product/${item.id}`} key={item.id}>
                            <div className="flex items-center gap-2 mb-2 hover:bg-slate-300 rounded-md">
                              <img
                                src={item.thumbnail}
                                alt=""
                                className="w-12"
                              />
                              <div>
                                <h2 className="text-sm font-medium">
                                  {item.title}
                                </h2>
                                <p className="text-xs text-gray-500">
                                  {item.price}$
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="flex justify-center">
                          <img
                            src="https://img.freepik.com/free-vector/red-supermarket-basket-isolated_1284-35982.jpg?w=740&t=st=1719996355~exp=1719996955~hmac=e34fca7fd2816694cb68acf10e6050fa7ba557725aa2278d1224e380c6b16479"
                            alt=""
                            className="w-56
                   "
                          />
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-sm font-medium">
                          {carts.length} sản phẩm trong giỏ
                        </p>
                        <Link
                          to="/cart"
                          className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm"
                        >
                          Xem Giỏ hàng
                        </Link>
                      </div>
                    </div>
                    <span className="absolute top-[35px] md:top-[40px] right-2 w-4 h-4 bg-white transform rotate-45 "></span>
                  </>
                )}
              </div>
            ) : (
              <div>
                {showHoverContent && (
                  <>
                    <div className=" flex justify-center absolute md:top-[35px] right-0 md:right-[-50px] z-10 mt-2 w-[200px] md:w-[400px] bg-white rounded-lg shadow-lg p-4 ">
                      <img
                        src="https://img.freepik.com/free-vector/red-supermarket-basket-isolated_1284-35982.jpg?w=740&t=st=1719996355~exp=1719996955~hmac=e34fca7fd2816694cb68acf10e6050fa7ba557725aa2278d1224e380c6b16479"
                        alt=""
                        className="w-56
                     "
                      />
                    </div>
                    <span className="absolute top-[35px] md:top-[40px] right-2 w-4 h-4 bg-white transform rotate-45 "></span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center pb-3 w-full place-content-around">
        <ul className="flex flex-row md:flex-row md:gap-5 gap-2 w-1/2 pl-3  flex-wrap left-0">
          {listCate.slice(0, 5).map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:underline text-white text-xs md:text-sm "
            >
              <Link to={`category/${item.slug}`}>
                {item.name.replace("-", "")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
