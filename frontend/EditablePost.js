//NOTES:  this component it meant to be use to leverage ManageAdSinglePost to be editable but unfortunately I couldn't figured out how to do it


// import React from 'react';
// import $ from 'jquery';

// // gets postId as props from manageAd.js. GetSinglePostInfo will use postId to fetch the post info  
// const EditPost = React.createClass({
// 	getInitialState() {
// 	 return ({
// 	 	post: '',
// 	 })
// 	},

// 	// fetch the post info
// 	componentDidMount: function () {
// 		$.ajax({
// 			url:'/api/post/' + this.props.params.postId,
// 			method:'GET'
// 		})
// 		.done((data)=>{
// 			this.setState({post:data})
// 		})
// 	}, 

// 	// pass props to ManageAdSinglePost
// 	render(){
// 		console.log('GetSinglePostInfo:',this.state)
// 		return(
// 			<div>
// 			EditPost
// 	     {/*<EditPost postInformation={this.state.post} />*/}
//      	</div>
// 		)
// 	}
// })
// export default EditPost;