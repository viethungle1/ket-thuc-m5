import {ListProduct} from "../product/ListProduct";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <div>
                <h2>Danh sách sản phẩm</h2>
                <button type="button" className="btn btn-success">
                    <Link to={'create/product'} style={{textDecoration:'none',color:'white'}}>Create-Product</Link></button>
                <ListProduct></ListProduct>
            </div>

        </>
    )
}