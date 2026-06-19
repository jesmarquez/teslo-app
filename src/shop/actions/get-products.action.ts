import { tesloApi } from "../../api/tesloApi"
import type { ProductsResponse } from "../../interfaces/products.response";

export const getProductsActions = async (): Promise<ProductsResponse> => {
  const { data } = await tesloApi.get<ProductsResponse>('/products');
 
  // console.log(data);

  const productsWithImageURl = data.products.map( (product) => ({
    ...product,
    images: product.images.map( (image) => `${ import.meta.env.VITE_API_URL }/files/product/${ image }`),
  }));
  return {
    ... data,
    products: productsWithImageURl,
  }

}