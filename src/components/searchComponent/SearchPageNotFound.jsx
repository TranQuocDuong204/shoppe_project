import React from "react";
import { useParams } from "react-router-dom";
const SearchPageNotFound = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-between items-center p-5">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a.png"
          alt=""
          className="w-[210px]"
        />
        <div className="flex flex-col justify-between items-center ">
          {" "}
          {searchTerm ? (
            <h2 className=" uppercase  font-bold">
              Không tìm thấy sản phẩm nào cho
              <span className=" font-light lowercase text-xl">
                "{searchTerm}"
              </span>
            </h2>
          ) : (
            <h2 className=" uppercase  font-bold">
              Vui lòng nhập từ khóa để tìm kiếm...
            </h2>
          )}{" "}
          <h3 className=""> Hãy thử sử dụng các từ khóa chung chung hơn</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchPageNotFound;
