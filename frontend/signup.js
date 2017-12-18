//here
import React from 'react';
import {Link, browserHistory, withRouter} from 'react-router';
import {connect} from 'react-redux'; //conect library
import * as userActions from './reducers/userActions.js' //import all actions & 
import './style/login.css';


var SignUp = React.createClass({
	getInitialState(){
		return {
			username:'',
	  	email: '',
	  	password: ''
    }
	},

	handleChange(inputField,e){
		this.setState({[inputField]:e.target.value})
	},

	componentDidMount(){
		this.setState({
		 	username: this.state.username,
		 	email: this.state.email,
		 	password:this.state.password
		})
	},

	submitLogin(e){
		e.preventDefault();

		$.ajax({
		  url:'/api/user',
		  type: 'POST',
		  data: {
		  	username:this.state.username,
		  	email: this.state.email,
		  	password: this.state.password
		  }

		})
		.then((data) => {
			this.props.login(data)
		})

		//passing email as props and redirect to profile
		browserHistory.push('/')
	},
	  
    render() {
    	console.log('this.state:', this.state)
    return (
      <div className="container">
      	<center>
			    <div style={{backgroundColor:'#e8e8e8',paddingTop:'20px'}}>
			    	<h2>Registration Form</h2>
			        <div className="card">
		            <img id="log" src="https://firebasestorage.googleapis.com/v0/b/interestesapp.appspot.com/o/jtnAkFHYrieKZ93N7Kf8OJdEx4Y2%2Flogin.png?alt=media&token=15aa9d1c-93b0-4001-91e1-2a21fd0298a2" />

								
								<form onSubmit={this.submitLogin}>
									<input style={{marginBottom:'5px'}} onChange={this.handleChange.bind(this, 'username')} type="username" placeholder="userName" name="username"  required="required"  autoFocus/><br/>
								  <input style={{marginBottom:'5px'}} onChange={this.handleChange.bind(this, 'email')} type="email" placeholder="email" name="email" required="required"/><br/>
								  <input style={{marginBottom:'5px'}}  onChange={this.handleChange.bind(this,'password')} type="password" placeholder="password" required="required"/>
								  
								  <div id="remember" className="checkbox">
								      <label>
								          <input type="checkbox"/> Remember me
								      </label>
								  </div>

								  <button type="submit" className="btn btn-success">Sign Up</button>

								</form>


			            <a href="#"> Forgot the password? </a>
			        </div>
			    </div>
		    </center>
      </div>
      
    )
  }
})

export default connect(null, userActions)(SignUp);

