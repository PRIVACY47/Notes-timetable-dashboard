import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import AxiosInstance from '../../Helpers/AxiosInstance';
function New(props) {
    const weekdays = ["MON","TUE","WED","THU","FRI","SAT"]
  return (
    <Formik
      initialValues={{
        year: '',
        section: '',
        data: [['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '']]
      }}
      onSubmit={(values)=>
      
        {
          AxiosInstance.post("/timetables",values).then(
            (response)=> {props.setTimetable([...props.timetables,response.data.timetable]); } )
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
                        {weekdays[index]}
                        {day.map((sub,sindex)=>{
                           return  <Field  key={sindex} name={`data[${index}][${sindex}]`}></Field>
                        })}
                    </div>)
                    
                })
            }
            </>
          </FieldArray>
          </>
            <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default New;
