import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './css.css'

export function ListProduct() {
    const [list,setList] = useState([])
    const [isDelete,setIsDelete] = useState(false)

    let loadList = () => {
        axios.get('http://localhost:3000/products').then(res => {
            setList(res.data)
        })
    }

    useEffect(() => {
        loadList()
    }, [isDelete]);

    return (
        <>
            <div className={"col-9 list"}>
                <h2>Danh sách sản phẩm</h2>
                <button type="button" className="btn btn-success">
                    <Link to={'create/product'} style={{textDecoration:'none',color:'white'}}>Create Product</Link></button>
                <table className="table" >
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {list.map((item,index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}
                            </th>
                            <td><Link to={'/detail/product/'+item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    axios.delete('http://localhost:3000/products/' + item.id).then(() => {
                                        setIsDelete(!isDelete);
                                    })
                                }}>Delete</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" style={{textDecoration:'none'}}>
                                    <Link style={{textDecoration:'none',color:'white'}} to={'/edit/product/'+item.id}>Edit</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}