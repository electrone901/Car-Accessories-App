import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import SideBar from './SideBar.js'
import RightSideBar from './rightSideBar.js'

const Home = React.createClass({
	getInitialState() {
		return ({post: []})
	},

	componentDidMount: function (){
		$.ajax({
			url: "/api/post/sort/by-five",
			method:'GET'
		})
		.done((data)=>this.setState({post:data}))
	},

	render(){
		return(
			
			<div className="container" style={{ width: '100%', marginTop:'43px', minHeight: '450px'}}>
				<div className="row">

					<div className="col-md-3">
						<SideBar /> 
					</div>  


					<div className='col-md-6'>
						<div className="row">
				      {this.state.post.map((ele,i)=>{
				        return (
				        	<div className='col-md-4 thumbnail' key={i} style={{paddingBottom: "20px"}}>
					        	<Link to={'/posts/' +ele.id}><img className="img-responsive" style={{height: '140px'}} src={ele.image}/></Link>

					        	<div className="link"><a href="details.html"><Link to={'/posts/' +ele.id} className="btn-default btn4"><span>READ MORE</span></Link></a>
					        	</div>

					        </div>
				        )
				      })}
				    </div>
			    </div>

			    <div className='col-md-3'>
			    	<RightSideBar/>
			    </div>

			  </div> 
	    </div>
			)
	}
})

export default Home




