import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export function DetailProduct() {
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(res =>{
            setProduct(res.data)
        })
    })
    return (
        <>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </>
    )
}