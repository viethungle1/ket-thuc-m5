import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import axios from "axios";

export function EditProduct() {
    const {id} = useParams();
    const [data,setData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[id])

    const FormikForm= useFormik({
        initialValues:{
            data
        },
        enableReinitialize:true,
        onSubmit: values=>{
            axios.put(`http://localhost:3000/products/${id}`,values).then(()=>{
                navigate('/')
            })
        }
    })

    return (
        <>
            <form onSubmit={FormikForm.handleSubmit}>
                <input value={FormikForm.values.data.title} name={'title'} onChange={FormikForm.handleChange}></input>
                <input value={FormikForm.values.data.price} name={'price'} onChange={FormikForm.handleChange}></input>
                <input value={FormikForm.values.data.description} name={'description'} onChange={FormikForm.handleChange}></input>
                <button type={"submit"}>Change</button>
            </form>
        </>
    )
}