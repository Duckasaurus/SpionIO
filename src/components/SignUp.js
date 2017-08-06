import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './../styles/Login.css';

const styles = {
  underlineStyle: {
    borderColor: "#2E5266"
  },
  hintStyle: {
    color: "black"
  },
  inputStyle: {
    color: "black"
  },
  paper: {
    width: '40%',
    marginLeft: '30%',
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    },
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newClient = {
      email: this.state.email,
      password: this.state.password,
    }
    axios.post('/signup', newClient)
    .catch(err => {
      return console.error(err);
    })
  }

  render() {
    return(
      <div className="signup">
        <h3>SIGNUP</h3>
        <div className="forms">
          {/* <form action="/login" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" class="form-control" name="email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>

            <button type="submit" class="btn btn-warning btn-lg">Login</button>
          </form> */}
          <Paper zDepth={2} style={styles.paper}><br/><br/><br/>
          {/* <TextField hintText="First Name" underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle} onChange={this.handleFirstNameChange}/>
          <br/><br/>
          <TextField hintText="Last Name" underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle} onChange={this.handleLastNameChange}/>
          <br/><br/> */}
          <TextField hintText="Email" underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle} onChange={this.handleEmailChange}/>
          <br/><br/>
          <TextField hintText="Password" underlineFocusStyle={styles.underlineStyle} inputStyle={styles.inputStyle} onChange={this.handlePassChange} type="password"/><br />
          <div className="submitBtn" > <br />
            <RaisedButton backgroundColor="#2E5266" labelColor="white" label="Submit" onClick={this.handleSubmit}/>
          </div>
          <br/><br/><br/>
          <hr width='20%'/>

        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Or go <a href="/">home</a>.</p><br/><br/><br/>
        </Paper>
        </div>
      </div>    
    )
  }
}

export default SignUp;