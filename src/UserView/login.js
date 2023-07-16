import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosInstance from '../Helpers/AxiosInstance';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const SignupSchema= Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required')
    })
    return (
        <Formik
       initialValues={{
         email: '',
         password: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        AxiosInstance.post("/login",values).then((response)=>{
          console.log(response)
          const status = response.data.status
          console.log(status)
          if(status === "success")
          {
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard", { replace: true })
          }
            
          
        })
         
       }}
     >

{({ errors, touched }) => (
         <Form>
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <Field name="password"  type="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}

           <button type="submit">Submit</button>
         </Form>
       )}

     </Formik>
        
    )
}

export default Login