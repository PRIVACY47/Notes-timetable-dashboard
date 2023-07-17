import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import AxiosInstance from '../../Helpers/AxiosInstance';

//component imports
import AddSubject from './AddSubject';


function NotesHome() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
      AxiosInstance.get("http://13.233.126.93:8000/notes").then((response) => {
        setData(response.data.notes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once

  if (!data) {
    return <p>loading.....</p>
  }
  return (

    <>
      <AddSubject setData={setData}/>
      <input type="text" onChange={handleQuery}></input>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={(values) => {
          
            AxiosInstance.delete('/notes',{data:values.checked}).then((response) => {
              // Handle the success of all delete requests if needed
              console.log(response.data.notes)
              if(response.data.notes)
                setData(response.data.notes)
            })
            .catch(error => {
              // Handle errors if any delete request fails
              console.error("Delete request error:", error);
            });
        }}
        
      >

        {
          ({ values }) => (
            <Form>
              {
                data
                  .filter((subject) => subject.subjectName.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((subject,index) => (
                    <div key={subject._id}>
                      <Field type="checkbox" name="checked" value={subject._id} />
                      <Link to={`/dashboard/subject/${subject._id}`}>{subject.subjectName}</Link>
                    </div>
                  ))
              }

              {values.checked.length>0?<button type='submit'>delete</button>:<button type='submit' disabled>delete</button>}
            </Form>
          )
        }

      </Formik>

    </>
  );
}

export default NotesHome;
