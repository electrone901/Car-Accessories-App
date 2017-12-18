/******************************************************************************
Title           : single-post.js
Author          : Luis Carbajal 
Description     : renders a single post info
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React from 'react';
import $ from 'jquery';

/******************************************************************************
    Component definitions
  ******************************************************************************/


  //@componentDidMount: fetches post info with postId passed as props from create-post.js. Then fetches userInfo
const SinglePost = React.createClass({
	getInitialState() {
		return ({
		 	post: '',
		 	userInfo: '',
	 	})
	},

	componentDidMount: function () {
		fetch('http://localhost:5000/api/post/' + this.props.params.postId, {
	    method: 'get',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	  })
	  .then((response) => {
	    console.log('Response post:', response)
	      return response.json();
	  })
	  .then((data) => {
	    this.setState({post: data})
	  })
	  .then(() => {
	  	fetch('http://localhost:5000/api/user/' + this.state.post.UserId, {
	      method: 'get',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    })
	    .then((response) => {
	      console.log('Response user: ',response)
	        return response.json();
	    })
	    .then((data) => {
	      console.log('user', data);
	      this.setState({userInfo: data})
	    })
	    .catch(function (error) {
	      console.log('Request failed', error);
	    });
	  })

	}, 

	render() {
		return(
			<div className="container" style={{font: 'bold 20px/1.3 PT Sans sans-serif', letterSpacing:'0.1em'}}>
				<h2>{this.state.post.title}</h2>

				<div className="thumbnail clearfix" style={{border: '0px'}}>
					<img className="img-responsive" src={this.state.post.image}/>
				</div>
	      
	      <h3 className="glyphicon glyphicon">{this.state.post.body}</h3>

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

	      {/*since we have seed files we need to check if the post it has userInfo if it has simple display the userInfo.username otherwise we get it from post.author/seed file*/}
	      {
	      	(this.state.userInfo) ?
	      	(<h4>Advertiser: {this.state.userInfo.username}</h4>):
	      	(<h4>Advertiser: {this.state.post.author}</h4>)
	      }
	      <h4>UserId: {this.state.post.UserId}</h4>
	      <h4>Phone: {this.state.post.phone}</h4>
	    </div>
		)
	}

})
export default SinglePost;

