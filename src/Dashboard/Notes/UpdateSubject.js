import React ,{ useEffect, useState }from "react";
import { Formik, Field, Form } from "formik";
import { useParams } from 'react-router-dom';
import AxiosInstance from "../../Helpers/AxiosInstance";

const handleRemoveField = (data, setData, index) => {
  const updatedUnits = [...data.units];
  updatedUnits.splice(index, 1);
  setData((prevData) => ({
    ...prevData,
    units: updatedUnits
  }));
};

const handleAddField = (data,setData)=>{
  const updatedUnits = [...data.units];
  updatedUnits.push({unitName:'',unitNo:'',Link:''})
  setData((prevData) => ({
    ...prevData,
    units: updatedUnits
  }));
}

function UpdateSubject() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
      // Axios GET request
      if(id){
      AxiosInstance
        .get(`/notes/${id}`)
        .then((response) => {
          // Handle successful response
          console.log(response.data.subject);
          setData(response.data.subject);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }}, [id]);
    
  
    if ((!data) ) {
      return <div>Loading...</div>;
    }
  
    return (
      <Formik
        enableReinitialize={true}
        initialValues={{
          subjectName: data.subjectName || " ",
          semister: data.semister || " ",
          regulation: data.regulation || " ",
          units: data.units || []
        }}
        onSubmit={(values) => {

          const convertedValues = {
            ...values,
            semister: parseInt(values.semister) ,
            units: values.units.map((unit) => ({
              ...unit,
              unitNo: parseInt(unit.unitNo)
            })) }
          AxiosInstance.put(`/notes/${id}`,convertedValues).then((response)=>{console.log(response)})
        }}
      >
        {({ values }) => (
          <Form>
            <Field name="subjectName" type="text" />
            <Field name="semister" type="text" />
            <Field name="regulation" type="text" />
  
            {values.units.map((unit, index) => (
              <div key={index}>
                <Field name={`units[${index}].unitName`} type="text" />
                <Field name={`units[${index}].unitNo`} type="text" />
                <Field name={`units[${index}].Link`} type="text" />
                <button type="button" onClick={() => handleRemoveField(data, setData, index)}>
                  Remove
                </button>
              </div>
            ))}
           
            <button type="button" onClick={()=>handleAddField(data,setData)} >add</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
}

export default UpdateSubject