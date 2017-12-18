// make an api that gives u all ads where UserId = 2, now the prob is how to get the 2 programatically  /api/post/UserId/2  
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const EditablePost = React.createClass({
getInitialState() {
	return ({
		post: [],

	})
},
componentDidMount: function (){
	$.ajax({
		url: "/api/manage",
		method:'GET'
	})
	.done((data)=>this.setState({post:data}))
},

render(){
	console.log('this.props manageAd ',this.props)
	console.log('this.state manage ', this.state)

	let display;
	if(!this.state.post[0]) {
		display = <h3 style={{color:'crimson'}}>Please make sure you are logged in and you <Link to={'/createPost'}>create an Ad post</Link></h3>
	}
	return(
		<div className="container" style={{minHeight: '450px'}}>
	      <h2>Manage all your ads in one place</h2>

	      {display}
	      {this.state.post.map((ele,i)=>{
	        return <div key={i}>
		            <h2>{ele.title}</h2>
		            <Link to={'/posts/manageSinglePost/' +ele.id}><h2 className="EditAdd-tag">Edit this Ad</h2> </Link>
		            <p>{ele.body}</p> 
		            <p>{ele.location}</p> 
	                <img style={{height:'200px'}} src={ele.image}/>
	                <hr style={{size:'30px'}} />  
	               </div>
	      })}
	      <div className="manageAddEpmty-container"></div>
      </div>
		)
}
})

export default EditablePost;

