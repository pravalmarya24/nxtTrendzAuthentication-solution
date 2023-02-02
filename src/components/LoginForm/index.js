import {Component} from 'react'
import './index.css'
// Write your JS code here
class LoginForm extends Component {
  state = {username: '', password: '', errorMessageVal: ''}

  onTakeUserName = event => {
    this.setState({username: event.target.value})
  }

  onTakeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    let errorMessage = ''
    if (username === 'rahul' && password === '') {
      errorMessage = "Username and Password didn't match"
    } else if (username === '' && password !== '') {
      errorMessage = "Username and Password didn't match"
    } else if (username !== 'rahul' && password !== 'rahul@2021') {
      errorMessage = "Username and Password didn't match"
    } else if (username === 'rahul' && password !== 'rahul@2021') {
      errorMessage = "Username and Password didn't match"
    } else {
      errorMessage = ''
    }
    console.log(errorMessage)

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess()
    }
    this.setState({username: '', password: '', errorMessageVal: errorMessage})
  }

  render() {
    const {username, password, errorMessageVal} = this.state
    return (
      <div className="login-page-bg-container">
        <div className="login-website-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img-size"
          />
        </div>
        <div className="form-bg-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="login-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="login-logo-img-size"
              />
            </div>
            <br />
            <label className="username-label" htmlFor="usernameId">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="usernameId"
              className="user-input-element"
              placeholder="Username"
              value={username}
              onChange={this.onTakeUserName}
            />
            <br />
            <label className="password-label" htmlFor="passwordId">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="passwordId"
              className="password-input-element"
              placeholder="Password"
              value={password}
              onChange={this.onTakeUserPassword}
            />
            <br />
            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-message-para">{errorMessageVal}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
