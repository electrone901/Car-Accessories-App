
import React from 'react';
import {Link} from 'react-router';
import SearchComponentForHome from './SearchComponentForHome.js';


var RightSideBar = React.createClass({
	render() {
    return (
      <div style={{width:'100%'}}> 

        <table className ="table-bordered" style={{width:'100%'}}>
        	<tbody>
	        	<tr>
	        		<th className='SearchByTitle'>
				    		Search By Title 
				    	</th>
				  	</tr>
				  	<tr>
				  		<td>
				  			<SearchComponentForHome/>
	            </td>
	          </tr>
          </tbody>
        </table>

	      {/*SECOND TABLE*/}
	    	<div style={{width:'100%'}}>

	    		<table className ="table-bordered" style={{width:'100%',     marginTop: '20px'}}>
	    			<tbody>
		        	<tr>
		        		<td className='SearchByTitle'>
					    		TODAY'S HOURS:
					    	</td>
					  	</tr>
					  	<tr>
					  		<td>
					  			<h4 className="glyphicon glyphicon-gift"> 10 a.m. - 6 p.m. </h4>
		            </td>
		          </tr>
	          </tbody>
	        </table>

	      </div>

	      <div style={{width:'100%'}}> 
	      	<h5><Link to={'/createPost'}> ADVERTISE WITH US!
				    	</Link></h5>
				  <img src= "https://tpc.googlesyndication.com/simgad/15271050611293750725" id='advertise'/>

	      </div>


	     {/*LINK TO CREATE POST*/}
	      <table style={{width:'100%'}}>
	      	<tbody>
		        <tr className='navLeftSide-table-header'>
					    
					    <th>
					    	<Link to={'/createPost'}>It's quick and easy. Create A Post Now.
					    	   &nbsp; &nbsp; &nbsp; &nbsp;
					    	</Link>
					    </th>  
						</tr>
					</tbody>
	      </table>


	    {/*FIRST TABLE*/}
	    <div style={{width:'100%'}}> 
	        <table >
	          <tbody>
	            <tr className='navLeftSide-table-header'>
						    <th>
						    	<Link to={'/createPost'}>
						    	Don't Wait, Advertise Today!!
						    	   &nbsp; &nbsp; &nbsp; &nbsp;
						    	</Link>
						    </th> 
					    </tr>
	          </tbody>
	        </table>
	    </div>

	    <div style={{width:'100%'}}> 
	    	<img src= "https://tpc.googlesyndication.com/simgad/240532871707449050" id='advertise'/>
	    </div>


      </div>
      
    )
  }
})

export default RightSideBar;


