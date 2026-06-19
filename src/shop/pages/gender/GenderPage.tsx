import { useParams } from 'react-router'
import { CustomJumbotron } from "../../components/CustomJumbotron"
import { ProductsGrid } from "../../components/ProductsGrid";
// import { products } from "../../../mocks/products.mock";
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { useProducts } from '../../hooks/useProducts';


export const GenderPage = () => {

  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel = gender === 'men' ? 'Hombres' : gender === 'woman' ? 'Mujeres' : 'Niños';


  return (
    <>
      <CustomJumbotron title={`Productos para ${ genderLabel }`} subTitle={""} />
      <ProductsGrid products= { data?.products || [] }/>
      <CustomPagination totalPages={ 7 }/>
    </>
  )
}
