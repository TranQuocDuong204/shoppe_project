import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getApiAll from "../../services/GetApiAll";
import BoxProDetail from "../../components/singlePageProComponent/BoxProDetail";
import NavigaSiglePro from "../../components/singlePageProComponent/NavigaSiglePro";
import BoxDesDetail from "../../components/singlePageProComponent/BoxDesDetail";
import BoxCommnet from "../../components/singlePageProComponent/BoxCommnet";
import LoadingProduct from "../../components/loading/LoadingProduct";
import BoxProductCategory from "../../components/singlePageProComponent/BoxProductCategory";
const ProductSinglePage = () => {
  const [proDetail, setProDetail] = useState({});
  const [imgMain, setImgMain] = useState("");
  const [initialImg, setInitialImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paramsCate, setParamsCate] = useState("");
  const [productCate, setProductCate] = useState([]);
  const { id } = useParams();
  const getApiDetailPro = async () => {
    setIsLoading(true);
    const res = await getApiAll.getApiProductDetail(id);
    setInitialImg(res.thumbnail);
    setImgMain(res.thumbnail);
    setParamsCate(res.category);
    setProDetail(res);
    setIsLoading(false);
  };
  const handleCLick = (data) => {
    setImgMain((prevImgMain) => (prevImgMain === data ? initialImg : data));
  };

  const getProductBycate = async () => {
    const res = await getApiAll.getApiProductByCategory(paramsCate);
    const { products } = res;
    setProductCate(products);
  };

  useEffect(() => {
    getApiDetailPro();
  }, [id]);

  useEffect(() => {
    getProductBycate();
  }, [paramsCate]);


  return (
    <div className="max-w-[1200px] mx-auto my-7">
      <NavigaSiglePro title={proDetail.title} />

      {isLoading ? (
        <LoadingProduct />
      ) : (
        <>
          <BoxProDetail
            imgMain={imgMain}
            proDetail={proDetail}
            getImg={(item) => {
              handleCLick(item);
            }}
          />

          {/* des */}
          <BoxDesDetail proDetail={proDetail} />

          {/* danh gia */}
          <BoxCommnet proDetail={proDetail} />
          <BoxProductCategory productCate={productCate}/>
         
        </>
      )}
    </div>
  );
};

export default ProductSinglePage;
