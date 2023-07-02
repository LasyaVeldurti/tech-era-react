import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import CourseItem from '../CourseItem'

import './index.css'

class Home extends Component {
  state = {coursesList: [], isLoading: true}

  componentDidMount() {
    this.getCourseDetails()
  }

  renderSuccessView = data => {
    const coursesData = data.courses.map(eachCourse => ({
      id: eachCourse.id,
      name: eachCourse.name,
      logoUrl: eachCourse.logo_url,
    }))
    this.setState({coursesList: coursesData, isLoading: false})
  }

  renderFailureView = () => {
    this.setState({isLoading: false})
    return (
      <div className="failure-container">
        <img
          className="failure-view-img"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <button
          className="retry-btn"
          onClick={this.getCourseDetails()}
          type="button"
        >
          Retry
        </button>
      </div>
    )
  }

  getCourseDetails = async () => {
    const courseDetailsApiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(courseDetailsApiUrl)
    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      this.renderSuccessView(data)
    } else {
      this.renderFailureView()
    }
  }

  render() {
    const {coursesList, isLoading} = this.state

    return (
      <Link to="/" className="link-item">
        <div className="home-container">
          <h1 className="heading">Courses</h1>
          {isLoading ? (
            <>
              <div data-testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            </>
          ) : (
            <>
              <ul className="courses-container">
                {coursesList.map(eachItem => (
                  <CourseItem key={eachItem.id} courseData={eachItem} />
                ))}
              </ul>
            </>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
