import React from 'react';
import $ from 'jquery';


// gets postId as props from manageAd.js. ManageAdSinglePost will use postId to fetch the post info 
const ManageAdSinglePost = React.createClass({
getInitialState() {
 return ({
 	post: [],
 	title: '',
  image: '',	  
  body: '',	  
  author: '',	  
  tags: '',	
  price: '',  
  phone: '', 
  year: '',
  brand: '',
  location: '',    
  payments_accepted: '',
  userId: '',
  postInfo: '',
 })
},

// fetch the post info
componentDidMount: function () {
	$.ajax({
		url:'/api/post/' + this.props.params.postId,
		method:'GET'
	})
	.done((data)=>{
		this.setState({post:data})
	})
},  

handleChange(inputField, e){
	console.log('typing:', e.target.value)
  this.setState({[inputField]: e.target.value})
  console.log('this.setState in handlechange:', this.setState)
},

submitUpdate(e){
	e.preventDefault()
  console.log('e:', e)
  console.log('this.state:', this.state)
},

// This<input value={this.state.post.title} onChange={this.handlechange} onBlur={() => this.props.actions.updateInput(this.state.inputValue)} /><br/>

render() {
	console.log('ARE YOU GETTING DATA LUIS',this.state.post)
	return(
		<div className="container">
		<form className="CreateAdd-container-main">
         <h1>Place an Ad</h1>
         <label>Title: </label><br/>
         <input className="form-control" type="text" value={this.state.post.title} onChange={this.handleChange} />
         <br/>
         
        <input onClick={this.submitUpdate} type="button" value="Submit" />
      </form><br/>



	      <h1>ManageAdSinglePost</h1>

	       <h2>yay: {this.state.post.title}</h2>


	
	      

        <label>Title trying to update but I cannot type, do you know why?: </label><br/>
        <input value={this.state.post.title} onchange={this.handleChange.bind(this, 'title')} type="text" name="title" />


        <br/><br/><br/>
	     
{/******************************************************************************
  Libraries and Components
******************************************************************************/}
				<hr/>		
				<hr/>		
				<hr/>		
				<form>
					<label>Title 00: </label><br/>
        	<input value={this.state.post.title} onchange={this.handleChange.bind(this, 'title')} type="text" name="title" />
        	<img src={this.state.post.image}/>
		      <p>{this.state.post.body}</p>


		      <h2>Product Information</h2>
        	<input onClick={this.submitUpdate} type="button" value="Submit" />

      	</form><br/>



      <label>Title: </label><br/>
        <input value={this.state.post.title} onchange={this.handleChange.bind(this, 'title')} type="text" name="title" />


	      <img src={this.state.post.image}/>
	      <p>{this.state.post.body}</p>


	      <h2>Product Information</h2>
	      <h4>Brand: {this.state.post.brand}</h4>
	      <h4>Year: {this.state.post.year}</h4>
	      <h4>Price: {this.state.post.price}</h4>
	      <h4>Condition: {this.state.post.tags}</h4>
		  <h4>Location: {this.state.post.location}</h4>
	      <h4>Payments Accepted: {this.state.post.payments_accepted}</h4>
	    
	      

	      <h2>Ad Information</h2>
	      <h4>Ad placed: {this.state.post.createdAt}</h4>
	      <h4>Ad last edited: {this.state.post.updatedAt}</h4>
	      <h4>Ad id: {this.state.post.id}</h4>
	      

	      <h2>Advertiser Information</h2>
	      <h4>Advertiser: {this.state.post.author}</h4>
	      <h4>UserId: {this.state.post.UserId}</h4>
	      <h4>Phone: {this.state.post.phone}</h4>



      </div>
		)
}

})
export default ManageAdSinglePost;

