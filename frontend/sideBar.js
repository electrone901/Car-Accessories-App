import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

 
var SideBar = React.createClass({

	getInitialState() {
		var today = new Date();
		var d = new Date();

    var dayName = d.toString().split(' ')[0];
		var date = (today.getMonth() + 1) + ' -' + today.getDate() + ' -' + today.getFullYear()
    return {
      date: date,
      dayName: dayName
    }
  },

  render() {
	  return (
	  	<div style={{width:'100%'}}>

	  		<table className='table'>
	      	<tr>
	      		<th>
				    	<Link to={'/gallery'}>What's New Today
				    	</Link>
				    </th>
				    <th>
				    	{
				    		(this.state) ?
				    		(<th style={{color: 'blue',fontSize: '15px',    paddingLeft: '15px'}}>{this.state.dayName}&nbsp;{this.state.date}</th>):
				    		(<th>Loading..</th>)
				    	}
				    </th>
				  </tr>
	      </table>

	      <table className ="table-bordered" style={{width:'95%'}}>
          <tbody>
            <tr style={{height:'30px'}}>
            	<th>Search  By Categories</th>
			   		</tr>

            <tr style={{height:'30px'}}>
              <td>
              	<Link to="/gallery" className="glyphicon glyphicon-fire tableText">  Newest Ads </Link>
              </td>
            </tr>

            <tr style={{height:'30px'}}>
            	<Link to="/OldestPost" className="glyphicon glyphicon-hand-right tableText">  Oldest Ads</Link>
            </tr>

             <tr style={{height:'30px'}}>
               <td>
             	<Link to="/FirstTenPost" className="glyphicon glyphicon-gift tableText">  Get First Ten Ads </Link>
               </td>
            </tr>
          </tbody>
        </table>


				<table className ="table-bordered" style={{width:'95%'}}>

					<tr style={{height:'50px', paddingTop: '5px'}}>
						<th>Search  By  Item Conditions</th>
					</tr>

				  <tbody> 

				    <tr style={{height:'30px'}}>
				      <td>
				     	<Link to="/NewestPost" className="glyphicon glyphicon-gift tableText">   New</Link>
				       </td>
				    </tr>

				    <tr style={{height:'30px'}}>
				       <td>
				     		<Link to="/gallery" className="glyphicon glyphicon-gift tableText">    Like New</Link>
				       </td>
				    </tr>

				    <tr style={{height:'30px'}}>
				       <td>
				     		<Link to="/NewestPost" className="glyphicon glyphicon-gift tableText"> Used </Link>
				       </td>
				    </tr>

				    <tr style={{height:'30px'}}>
				       <td>
				     	<Link to="/gallery" className="glyphicon glyphicon-gift tableText"> Broken for Replacement Parts</Link>
				       </td>
				    </tr>

				    <tr style={{height:'30px'}}>
				       <td>
				       	<Link to="/search" className="glyphicon glyphicon-gift tableText tableText"> Search </Link>
				       </td>
				    </tr>
				  </tbody>
				</table>

				<table className ="table-bordered" style={{width:'95%'}}>
				  <tbody>
				  	<tr style={{height:'30px'}}>
					  	<th> CHECK OUR  GALLERY</th>
						 </tr>
					   <tr>
					    <Link to="/gallery"> 
					    	See All Images <br/>
					     <img src= "http://images.thesamba.com/vw/images/xmas/xmas89.jpg" id='gallery-sideBar'/>
					    </Link>
					   </tr>
				  </tbody>
				</table>

				<table className ="table-bordered" style={{width:'95%'}}>
					<tbody>
						<tr style={{height:'30px'}}>
							<th>I Want to Feature an Ad</th>
						</tr>

						<tr style={{height:'30px'}}>
						   <td>
						 		<Link to="/help" className="glyphicon glyphicon-gift tableText"> Read Our Policy </Link>
						   </td>
						</tr>
					</tbody>
				</table>

				          




	  	</div>
	  )
}
})

export default SideBar;


