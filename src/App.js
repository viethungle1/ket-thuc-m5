import {Route, Routes} from "react-router-dom";
import {Home} from "./page/Home";
import {CreateProduct} from "./product/CreateProduct";
import {EditProduct} from "./product/EditProduct";
import {DetailProduct} from "./product/DetailProduct";

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/create/product'} element={<CreateProduct/>}/>
          <Route path={'/edit/product/:id'} element={<EditProduct/>}/>
          <Route path={'/detail/product/:id'} element={<DetailProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
