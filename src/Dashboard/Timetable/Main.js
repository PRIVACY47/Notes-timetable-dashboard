import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Formik, Field, Form, FieldArray } from 'formik';
import New from './New';
import AxiosInstance from '../../Helpers/AxiosInstance'

function Main() {
    const [timetables,setTimetable] = useState(null)

    useEffect(()=>{
        axios.get("http://13.233.126.93:8000/timetables").then((response)=>{setTimetable(response.data.timetables)})
    },[])

if(!timetables)
    return <p>loading...</p>
  return (
    <>
      <New  timetables={timetables} setTimetable={setTimetable}/>
      <Formik 
      
      initialValues={{checked :[]}}
       
      onSubmit={(values)=>{
        AxiosInstance.delete('/timetable',{data:values.checked}).then((response)=>{alert(response.data.message) ; 
          if(response.data.timetables)
          setTimetable(response.data.timetables)})
      }}
      >
        {({values})=>(
        <Form>
    {
      timetables.map((timetable,index)=>{
        return(
          <div key = {index}>
          <Field type="checkbox" name="checked" value={timetable._id}  />
          <Link to={`/dashboard/timetables/${timetable._id}`}>{timetable.year} {timetable.section}</Link>
          </div>
        )

    })
  }
  {values.checked.length>0?<button type="submit">delete</button>:<button type="submit" disabled>delete</button>}
        </Form>
        )}
      </Formik>
       
        
    </>
  )
}

export default Main