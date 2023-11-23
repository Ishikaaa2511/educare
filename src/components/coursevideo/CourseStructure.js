import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../../styles/coursevideo.css'
function Course(props) {
    const { coursename } = useParams();

    const courseName = coursename;

    const courses = {
        reactjs:[
            {title:"react js title1 ", vid:"JvC7aA24m4Q"},
            {title:"react js title2 ", vid:"kFe-RRaOy48"},
            {title:"react js title3 ", vid:"JvC7aA24m4Q"}
        ],
        nodejs:[
            {title:"node js title1 ", vid:"kFe-RRaOy48"},
            {title:"node js title2 ", vid:"JvC7aA24m4Q"},
            {title:"node js title3 ", vid:"kFe-RRaOy48"}
        ]
    }

    const [vid, uid] = useState(courses[courseName][0].vid)
    const [ title, util] = useState(courses[courseName][0].title)

    const rendervideo=()=>{
        return(
            <>
            <h1>{title}</h1>
        <div className="video-container ">
        <iframe 
        height="400" width="680"
        src={"//www.youtube.com/embed/"+vid+"?rel=0"}
        frameborder="0" allowFullScreen
        ></iframe>
      </div>
      </>
        )
    }

  return (
    <div>
     
     {rendervideo()}
     <div className="collection">
        {
            courses[courseName].map(item=>{
                return <Link to="#!" className="collection-item" onClick={()=>{
                    uid(item.vid)
                    util(item.title)
                }}>{item.title}</Link>
            })
        }
      </div>
     </div>
  );
}

export default Course; 