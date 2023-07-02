import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class CourseItemDetails extends Component {
  state = {courseDescription: [], isLoading: true}

  componentDidMount() {
    this.getCourseDescription()
  }

  getCourseDescription = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    console.log(data.course_details)
    if (response.ok === true) {
      const courseInfo = {
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({courseDescription: courseInfo, isLoading: false})
    }
  }

  render() {
    const {courseDescription, isLoading} = this.state

    return (
      <div className="course-container">
        {isLoading ? (
          <>
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </div>
          </>
        ) : (
          <>
            <img
              className="course-img"
              src={courseDescription.imageUrl}
              alt={courseDescription.name}
            />
            <div className="course-data-container">
              <h1 className="course-heading">{courseDescription.name}</h1>
              <p className="course-description">
                {courseDescription.description}
              </p>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CourseItemDetails
