import axios from "axios";

import {
  URL_API_CATEGORY,
  URL_API_CATEGORY_BY_PRODUCT,
  URL_API_PRODUCTS,
  URL_API_PRODUCT_SEARCH_SORT,
} from "../utils/ApiUrls";

const getApiAll = {
  getApiCategory: async () => {
    try {
      const category = await axios.get(URL_API_CATEGORY);
      return category.data;
    } catch (err) {
      console.log(err);
    }
  },

  getApiProduct: async (params) => {
    const products = await axios.get(URL_API_PRODUCTS, {
      params,
    });
    return products.data;
  },

  getApiProductSearchSort: async (params) => {
    const products = await axios.get(URL_API_PRODUCT_SEARCH_SORT, {
      params,
    });
    return products.data;
  },

  getApiProductByCategory: async (params) => {
    const categotyByProduct = await axios.get(
      `${URL_API_CATEGORY_BY_PRODUCT}${params}`
    );
    return categotyByProduct.data;
  },

  getApiProductDetail: async (id) => {
    const productDetail = await axios.get(`${URL_API_PRODUCTS}${id}`);
    return productDetail.data;
  },
};

export default getApiAll;
