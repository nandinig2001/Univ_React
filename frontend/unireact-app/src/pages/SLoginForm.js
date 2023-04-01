import React from "react";

class BasicForm extends React.Component {

  handleSubmit(e) {    
    e.preventDefault();
  
    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
  
      // call login API
      fetch('http://127.0.0.1:8000/api-auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed.');
        }
      })
      .then(data => {
        localStorage.setItem('authToken', data.authToken);
        window.location.href = '/';
      })
      .catch(error => {
        console.error('login error', error);
      });
    }
  }
  
  
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
        
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      e.target.classList.add('active');
      
      this.setState({
        [e.target.name]: e.target.value
      });
      
      this.showInputError(e.target.name);
    }
    
    // handleSubmit(e) {    
    //   e.preventDefault();
      
    //   console.log('component state', JSON.stringify(this.state));
      
    //   if (!this.showFormErrors()) {
    //     console.log('form is invalid: do not submit');
    //   } else {
    //     console.log('form is valid: submit');
    //   }
    // }
    
    showFormErrors() {
      const inputs = document.querySelectorAll('input');
      let isFormValid = true;
      
      inputs.forEach(input => {
        input.classList.add('active');
        
        const isInputValid = this.showInputError(input.name);
        
        if (!isInputValid) {
          isFormValid = false;
        }
      });
      
      return isFormValid;
    }
    
    showInputError(refName) {
      const validity = this.refs[refName].validity;
      const label = document.getElementById(`${refName}Label`).textContent;
      const error = document.getElementById(`${refName}Error`);
      const isPassword = refName.indexOf('password') !== -1;
       
          
      if (!validity.valid) {
        if (validity.valueMissing) {
          error.textContent = `${label} is a required field`; 
        } else if (validity.typeMismatch) {
          error.textContent = `${label} should be a valid email address`; 
        } else if (isPassword && validity.patternMismatch) {
          error.textContent = `${label} is incorrect`; 
        } 
        return false;
      }
      
      error.textContent = '';
      return true;
    }
  
    render() {
      return (
        <div className="card shadow-sm border-2 px-3 rounded-2 mb-3 py-4 mx-auto mt-3 bg-light" style={{width: "500px",maxWidth:"100%",}}>
        <form novalidate>
            <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Login Form</h3>
                      <p>Student Login</p>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      
                    </div>
                  </div>
                </div>
          <div className="form-group">
            <h5 id="usernameLabel">Username</h5>
            <input className="form-control"
              type="email"
              name="username"
              ref="username"
              value={ this.state.username } 
              onChange={ this.handleChange }
              required />
            <div className="error" id="usernameError" />
          </div>
          <div className="form-group">
            <h5 id="passwordLabel">Password</h5>
            <input className="form-control"
              type="password" 
              name="password"
              ref="password"
              value={ this.state.password } 
              onChange={ this.handleChange }
              pattern=".{8,}"
              required />
            <div className="error" id="passwordError" />
          </div>
          
          <button className="btn btn-warning " style={{height:"4rem", width:"440px",fontSize:"15px"}}
            onClick={ this.handleSubmit }>Submit</button>
        </form>
        {/* <h5 className="text-center">Click here to <a href="/RegisterForm">Register</a></h5> */}
        </div>

      );
    }
  }
  
  class LoginForm extends React.Component {
    render() {
      return (
        <div className="container">
          <BasicForm />
          
        </div>
      );
    }
  }
  export default LoginForm;