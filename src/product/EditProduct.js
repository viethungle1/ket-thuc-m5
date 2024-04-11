import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import axios from "axios";
import './css.css'

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
            <form onSubmit={FormikForm.handleSubmit} className={"formEdit"}>
                <div className="col-md-12">
                    <label htmlFor="title" className="form-label">Tilte</label>
                    <input className="form-control" value={FormikForm.values.data.title} name={'title'} onChange={FormikForm.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="title" className="form-label">Price</label>
                    <input className="form-control"  value={FormikForm.values.data.price} name={'price'} onChange={FormikForm.handleChange}></input>
                </div>
                <div className="col-md-12">
                    <label htmlFor="title" className="form-label">Description</label>
                    <input className="form-control"  value={FormikForm.values.data.description} name={'description'} onChange={FormikForm.handleChange}></input>
                </div>
                <button type={"submit"}>Change</button>
            </form>
        </>
    )
}