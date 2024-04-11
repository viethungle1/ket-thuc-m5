import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export function CreateProduct() {
    const navigate = useNavigate()
    return (
        <>
            <h3>Create-Product</h3>
            <Formik initialValues={{
                title:'',
                price:'',
                description:''
            }} onSubmit={(values) => {
                axios.post('http://localhost:3000/products',values).then(() => {
                    navigate('/')
                })
            }}>
                <Form>
                    <Field name={'title'}></Field>
                    <Field name={'price'}></Field>
                    <Field name={'description'}></Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}