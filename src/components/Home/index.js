import {Component} from 'react'
import './index.css'

// Write your JS code here
class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <nav className="navbar">
          <div className="website-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logout-logo-img-size"
            />
          </div>
          <div className="navbar-link-container">
            <ul className="unordered-list">
              <li>
                <p className="para">Home</p>
              </li>
              <li>
                <p className="para">Products</p>
              </li>
              <li>
                <p className="para">Cart</p>
              </li>
            </ul>
            <button className="logout-btn" type="button">
              Logout
            </button>
          </div>
        </nav>
        <div className="bottom-container">
          <div className="description-container">
            <h1 className="description-heading">
              Clothes That Get You Noticed
            </h1>
            <p className="description-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exiting fashion in your own way.
            </p>
            <button className="shop-btn" type="button">
              Shop Now
            </button>
          </div>
          <div className="clothe-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="clothe-img-size"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
