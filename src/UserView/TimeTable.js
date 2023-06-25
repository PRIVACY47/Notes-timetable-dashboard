import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function TimeTable() {
     const [timetables,setTimetable] = useState(null)

    useEffect(()=>{
        axios.get("http://13.233.126.93:8000/timetables").then((response)=>{setTimetable(response.data.timetables)})
    },[])

    if(!timetables)
    return <p>loading....</p>
  return (
    <div>

{
  timetables.map((timetable, index) => {
    console.log(timetable);
    return (
      <>
        <p key={index}>Year: {timetable.year} Section: {timetable.section}</p>
        {
          timetable.data.map((days, index) => {
            return (
              <div key={index}>
                {
                  days.map((day) => {
                    return <span style={{margin:"20px"}}>{day}</span>;
                  })
                }
              </div>
            );
          })
        }
      </>
    );
  })
}

    </div>


  )
}

export default TimeTable