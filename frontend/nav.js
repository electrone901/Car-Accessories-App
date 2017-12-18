import React from 'react';
import {Link} from 'react-router';
import './style/Nav.css';
import {connect} from 'react-redux'; 
import * as userActions from './reducers/userActions.js' 

var Navbar = React.createClass({

  // handleLogout logouts the user and pass the props to 
  handleLogout: function(e){
    e.preventDefault()
    $.ajax({
      url:'/api/logout',
      type: 'POST'
    })
    .then(()=>{
    this.props.logout() //action from userActions
    })
  },


  render: function() {
    console.log('this.props: ',this.props)
    console.log('Luis nav: ',this.props.userState.user)
    return (
    <div>

      <nav className="navbar main">
          <div className="logo col-xs-3">
            <a href="/" className="logoWidth">
             <img src= "http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />

            </a>
          </div>
      </nav>

      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/home">Home</Link></li> 
              <li className="linetext"><Link to="/gallery">Gallery</Link></li>
              <li className="linetext"><Link to="/all-ads">All Ads</Link></li>
              <li className="linetext"><Link to="/createPost">Place an Ad</Link></li>
              <li className="linetext"><Link to="/manageAd">Manage Ads</Link></li>
              <li className="linetext"><Link to="/contact">Contact Us</Link></li>  
              <li className="linetext"><Link to="/help">Help</Link></li>


            { /* if props exist then show logout otherwise show Login */}
             {this.props.userState.user ?
                (<li className="linetext"><a href='#' onClick={this.handleLogout}>Log Out</a></li> ):
                <li className="linetext"><Link to="/login">Login<br/></Link></li>
              }

              { /* if props doesn't exist show sign up otherwise show null */}

              {! this.props.userState.user ?
                <li className="linetext"><Link to="/signup">Sign Up</Link></li> :
                null
              }              




              <li className="linetext"><Link to="/search">Search</Link></li>
              <li className="linetext">{(this.props.userState.user) ? <li className="loggedUser">Logged as {this.props.userState.user.username}</li> :
          (<p className="loggedUser"></p>)
        }</li>
            </ul>

          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

const mapStoreToProps = store => (
  {userState: store.userReducer}
)
export default connect(mapStoreToProps, userActions)(Navbar); //connects: mapStoreToProps is global state in the props


