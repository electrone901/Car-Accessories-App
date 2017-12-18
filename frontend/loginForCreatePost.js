import React from 'react';
import {Link,browserHistory} from 'react-router';
import { withRouter } from 'react-router'
import './style/login.css';
import {connect} from 'react-redux'; //conect library
import * as userActions from './reducers/userActions.js' //import all actions & 


var loginForCreatePost = React.createClass({

	getInitialState(){
		return {
			userInfo: null,
	  	email: '',
	  	password: ''
		}
	},

	handleChange(inputField,e){
		this.setState({[inputField]:e.target.value})
	},
	
	submitLogin(e){
		e.preventDefault();
		$.ajax({
		  url:'/api/login',
		  type: 'POST',
		  data: {
		  	email: this.state.email,
		  	password: this.state.password
		  }

		})
		.then((data)=>{
			this.setState({userInfo:data})
			this.props.login(data)
		})

		//passing email as props and redirect to profile
		// browserHistory.push('/')
		
		
	},
  
    render() {
    	console.log('login:', this.props)
	    return (
	      <div className="container">
	      	<center>
						<div style={{backgroundColor:'#e8e8e8',paddingTop:'20px'}}>
							<h2 style={{color:'rgb(242, 87, 79)'}}>Please Log in To Continue</h2>
							<div className="card">

								<img id="log" src="http://edtrack.herokuapp.com/a4660052d5b6fee6192db0b5aeede812.png" />

								<form onSubmit={this.submitLogin}>
									<input onChange={this.handleChange.bind(this, 'email')} type="email" placeholder="email"  required="required"  autoFocus/>
									<input onChange={this.handleChange.bind(this,'password')} type="password" placeholder="password" required="required"/>

									<div id="remember" className="checkbox">
										<label><input type="checkbox"/> Remember me</label>
									</div>

									<button type="submit" className="btn btn-success">Login</button>
								</form>

							    <a href="#"> Forgot the password? </a>
							</div>
						</div>

						{
							(this.state.userInfo) ? (<p style={{color:'brown', fontSize: '20px'}}> 
		          Full name: {this.state.userInfo.firstName}  {this.state.userInfo.lastName}<br/> 
		          UserName: {this.state.userInfo.userName}<br/>
		          Email: {this.state.userInfo.email}<br/> 
		          College: {this.state.userInfo.college}<br/>  
		          Cuny Id: {this.state.userInfo.cunyId}<br/>   </p>):(<p></p>)
						}
					</center>
	      </div>
	      
	    )
  	}
})

//take obj from store turns into props, access & sets state 
// const mapStoreToProps = store => (
//   {user: store.userReducer}
// )
export default connect(null, userActions)(loginForCreatePost); //connects: mapStoreToProps is global state in the props



