import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

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
                            <button style={{textDecoration:'none'}}>
                                <Link to={'/edit/product/'+item.id}>Edit</Link>
                            </button>
                        </td>
                        <td>
                            <button onClick={() => {
                                axios.delete('http://localhost:3000/products/' + item.id).then(() => {
                                    alert('Xóa thành công!!!');
                                    setIsDelete(!isDelete);
                                })
                            }}>Delete</button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}