import React from "react";

class BasicForm extends React.Component {
  
    constructor(props) {
      super(props);
      
      this.state = {
        pnr: '',
        username: '',
        password: '',
        passwordConfirm: ''
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
    
    handleSubmit(e) {    
      e.preventDefault();
      
      console.log('component state', JSON.stringify(this.state));
      
      if (!this.showFormErrors()) {
        console.log('form is invalid: do not submit');
      } else {
        console.log('form is valid: submit');
      }
    }
    
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
      const isPasswordConfirm = refName === 'passwordConfirm';
      
      
      if (isPasswordConfirm) {
        if (this.refs.password.value !== this.refs.passwordConfirm.value) {
          this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
        } else {
          this.refs.passwordConfirm.setCustomValidity('');
        }
      }
          
      if (!validity.valid) {
        if (validity.valueMissing) {
          error.textContent = `${label} is a required field`; 
        } else if (validity.typeMismatch) {
          error.textContent = `${label} should be a valid email address`; 
        } else if (isPassword && validity.patternMismatch) {
          error.textContent = `${label} should be longer than 8 chars`; 
        } else if (isPasswordConfirm && validity.customError) {
          error.textContent = 'Passwords do not match';
        }
        return false;
      }
      
      error.textContent = '';
      return true;
    }
  
    render() {
      return (
        <div className="card shadow-sm border-0 px-3 rounded-2 mb-5 py-4 mx-auto mt-5 bg-light"  style={{width: "500px",maxWidth:"100%",}}>
        <form novalidate>
            <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Registeration Form</h3>
                      <p>Student Registeration Form</p>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      
                    </div>
                  </div>
                </div>

                <div className="form-group">
            <label id="pnrlabel">PNR Number</label>
            <input className="form-control"
              type="number"
              name="pnr"
              ref="pnr"
              value={ this.state.pnr } 
              onChange={ this.handleChange }
              required />
            <div className="error" id="pnrError" />
          </div>

          <div className="form-group">
            <label id="usernameLabel">Username</label>
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
            <label id="passwordLabel">Password</label>
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
          <div className="form-group">
            <label id="passwordConfirmLabel">Confirm Password</label>
            <input className="form-control"
              type="password" 
              name="passwordConfirm"
              ref="passwordConfirm"
              value={ this.state.passwordConfirm } 
              onChange={ this.handleChange }
              required />
            <div className="error" id="passwordConfirmError" />
          </div>
          <button className="btn btn-warning " style={{height:"4rem", width:"440px",fontSize:"15px"}}
            onClick={ this.handleSubmit }>Submit</button>
        </form>
        <h5 className="text-center">Have an account <a href="/LoginForm">Login</a></h5>
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