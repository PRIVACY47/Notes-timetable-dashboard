import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';

import AxiosInstance from '../../Helpers/AxiosInstance'
function AddSubject(props) {
  return (
    <Formik  
    initialValues={{ subjectName: "", semister: "", regulation: "",
        units: [{ unitName: "", unitNo: "", Link: ""}] }}
  
    onSubmit={async(values) => {
      const convertedValues = {
        ...values,
        semister: parseInt(values.semister) ,
        units: values.units.map((unit) => ({
          ...unit,
          unitNo: parseInt(unit.unitNo)
        }))
      };
        await AxiosInstance.post("notes",convertedValues    
        ).then((response)=>{alert(response.data.message); if(response.data.data) props.setData(response.data.data)}).catch((error)=>{console.log(error)})
      }}
    >
      {({ values }) => (
        <Form>
          <Field name="subjectName" type="text" />
          <Field name="semister" type="text" />
          <Field name="regulation" type="text" />

          <FieldArray name="units">
            {arrayHelpers => (
              <div>
                {values.units.map((unit, index) => (
                  <div key={index}>
                    <Field name={`units[${index}].unitName`} type="text" />
                    <Field name={`units[${index}].unitNo`} type="text" />
                    <Field name={`units[${index}].Link`} type="text" />

                    <button type="button" onClick={() => arrayHelpers.remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => arrayHelpers.push({ unitName: "", unitNo: "", Link: "" })}>
                  Add
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddSubject;
