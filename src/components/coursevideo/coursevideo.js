import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/coursevideo.css"
function coursevideo() {
  return (
    <div>
      <Link to="/Mycourses/reactjs">
      <h1 className='container_h1'>1.React js course</h1>
      </Link>
      <Link to="/Mycourses/nodejs">
      <h1 className='container_h1'>2.Node js course</h1>
      </Link>
    </div>
  )
}

export default coursevideo;