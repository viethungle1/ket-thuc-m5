import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import './css.css'

export function CreateProduct() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                title:'',
                price:'',
                description:''
            }} onSubmit={(values) => {
                axios.post('http://localhost:3000/products',values).then(() => {
                    navigate('/')
                })
            }}>
                <Form className={"create"}>
                    <h3>Thêm sản phẩm</h3>
                    <div className="col-md-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field className="form-control form-input" name={'title'}></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="title" className="form-label">Price</label>
                        <Field className="form-control form-input" name={'price'}></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="title" className="form-label">Description</label>
                        <Field className="form-control form-input" name={'description'}></Field>
                    </div>
                    <div className={"buttonC"}>
                        <button className="btn btn-primary">Thêm</button>
                        <Link style={{marginLeft:'5px'}} to={'/'}><button className="btn btn-primary">Trở lại</button></Link>
                    </div>
                </Form>
            </Formik>
        </>
    )
}