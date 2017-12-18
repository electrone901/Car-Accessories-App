/******************************************************************************
Title           : AllAds.js
Author          : Luis Carbajal 
Description     : displays all adds from our database
******************************************************************************/

/******************************************************************************
  Libraries and Components
******************************************************************************/
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

/******************************************************************************
    Component definitions
  ******************************************************************************/
  //@Title: AllAds
  //@Description: Fetches data and render it
const AllAds = React.createClass({
	getInitialState() {
		return ({post: []})
	},
	
	/******************************************************************************
    Function definitions
  ******************************************************************************/
  //@Title: componentWillMount
  //@Description: Fetches data for all ads, then display them
  componentDidMount: function (){
		$.ajax({
			url: "/api/post",
			method:'GET'
		})
		.done((data)=>this.setState({post:data}))
	},

	render(){
		return(
			<div className="container" style={{minHeight: '450px'}}>

				<div className="row" style={{display: 'flex',
	    flexWrap: 'wrap' }}>

			      {this.state.post.map((ele,i)=>{
			        return (

			        	<div className="col-sm-4" key={i} style={{paddingBottom: "50px"}}>

			        		<div className="thumbnail clearfix" >
			        			<Link to={'/posts/' +ele.id}>
			        				<img style={{height: '200px'}} className="img-responsive"  src={ele.image} />
									  </Link>
		                
		              </div>


				        	<div>
				        		<div className="caption">
									    <div className="txt1">REGISTERED 2016</div>
									    <div><Link className="txt2" to={'/posts/' +ele.id}>2016 {ele.title}
									  </Link></div>

									    <div className="info clearfix">
									      <span className="price">${ele.price}</span>
									      <span className="speed">95,000 KM 

									      <i className="glyphicon glyphicon-time" style={{color:"red"}}></i></span>

									      
									    </div>

									    <div className="txt3">
									      <span>Used  •  2016  •  Automatic  •  Diferrent colors  •  Petrol • {ele.location}</span>
									    </div>

									  </div> 		

			            </div> 
			         </div>

			        )
			      })}

			   </div>

	      </div>
			)
	}

})

export default AllAds;




