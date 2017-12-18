import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Gallery = React.createClass({
	getInitialState() {
		return ({post: []})
	},
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
		        return <div className="col-sm-4" key={i} style={{paddingBottom: "50px"}}>
		        					<div className="thumbnail clearfix">
				                <Link to={'/posts/' +ele.id}><img style={{height: '200px'}} className="img-responsive"  src={ele.image} /></Link>
			                </div>

			                <div className="txt1">
				                <span className="txt">FIRST DRIVE REVIEW </span>
				                <span className="stars">
				                  <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i>
				                  <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i>
				                  <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i>
				                  <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i>
				                  <i className="glyphicon glyphicon-star-empty" style={{color:"red"}} aria-hidden="true"></i>
				                </span>
				              </div>

              				<div className="txt2">{ele.title}</div>
              				<div className="txt3">Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem velde metus imperdiet lacinia.
											</div>

              				<div className="link"><a href="details.html"><Link to={'/posts/' +ele.id} className="btn-default btn4"><span>READ MORE</span></Link></a>
              				
              				</div>
		               </div>
		      	})
		      }

	    	</div>
	    </div>
			)
	}
})

export default Gallery


// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="row">
//   <div class="col-xs-6 col-md-3">
//     <a href="#" class="thumbnail">
//       <img src="..." alt="...">
//     </a>
//   </div>
//   ...
// </div>

// // <div className="container-gallery">

// // 		      {this.state.post.map((ele,i)=>{
// 		        return <div key={i}>
// 		                <h2 className='gallery-title'>{ele.title}</h2> 
		                
// 		                <img src={ele.image} className='gallery-img'/>
		                
// 		               </div>
// 		      })}
// 	      </div>