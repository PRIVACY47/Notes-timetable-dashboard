import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import AxiosInstance from '../../Helpers/AxiosInstance';
import { Formik, Field, Form, FieldArray } from 'formik';
function Update() {

  const [timetables,setTimetable] = useState(null)
  const {id} = useParams();
  useEffect(()=>{
      AxiosInstance.get(`/timetables/${id}`).then((response)=>{console.log(response.data.subject); setTimetable(response.data.subject)})
      // console.log(id)
  },[])
  if(!timetables)
      return <p>Loading...</p>
  return (
    

  <Formik
      initialValues={{
        year: timetables.year ,
        section: timetables.section ,
        data: timetables.data 
      }}
      onSubmit={(values)=>
      
        {
          AxiosInstance.put(`/timetables/${id}`,values).then((response)=> {alert(response.data.message);setTimetable(response.data.timetable)}).catch((err)=>alert(err.message))
        }
      
      }

    >
            {({ values }) => (
        <Form>
          <Field name='year' />
          <Field name='section' />
            <>
          <FieldArray name ="data">
            <>
            {
                values.data.map((day,index)=>{

                    return (
                    <div key={index}>
                        {/* {weekdays[index]} */}
                        {day.map((sub,sindex)=>{
                           return  <Field key={sindex} name={`data[${index}][${sindex}]`} value={sub}></Field>
                        })}
                    </div>)
                    
                })
            }
            </>
          </FieldArray>
          </>
            <button type="submit">Update</button>
        </Form>
      )}
  </Formik>
  )
  
}

export default Update