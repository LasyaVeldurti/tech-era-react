import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseData} = props
  const {logoUrl, name, id} = courseData
  return (
    <Link to={`/courses/${id}`} className="link-item">
      <li className="list-item">
        <img className="course-logo" src={logoUrl} alt={name} />
        <h1 className="course-name">{name} </h1>
      </li>
    </Link>
  )
}

export default CourseItem
