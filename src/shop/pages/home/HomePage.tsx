import { CustomJumbotron } from "../../components/CustomJumbotron"
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { ProductsGrid } from "../../components/ProductsGrid";
import { products } from "../../../mocks/products.mock";

export const HomePage = () => {
  return (
    <div>
      {/* <h1>Hola mundo</h1>
      <h1 className="font-montserrat">Lets to work</h1>
      <h1 className="font-montserrat font-thin">Lets to work</h1>
      <h1 className="font-montserrat font-normal">Lets to work</h1>
      <h1 className="font-montserrat font-bold ">Lets to work</h1>

      <Button>Hola mundo</Button> */}
      <ProductsGrid products= { products }/>
      <CustomJumbotron title={"Todos los productos"} subTitle={""} />
      <CustomPagination totalPages={ 7 }/>
    </div>
  )
}
