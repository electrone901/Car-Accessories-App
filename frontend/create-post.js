/******************************************************************************
Title           : create-post.js
Author          : Luis Carbajal 
Description     : allows user to create a new post
******************************************************************************/

/******************************************************************************
  Libraries and Components
******************************************************************************/
import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js'
import LoginForCreatePost from './loginForCreatePost'


/******************************************************************************
    Component definitions
  ******************************************************************************/

  //@handleChange: gets and sets user input
  //@submitNewPost: hits api/post to create a new post then returns the post info and sets state to postInfo. Finally calls browserHistory with path router: `/posts/${this.state.postInfo.id}` to redirect to the new post just created
const CreatePost = React.createClass({
  getInitialState(){
    return {
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
     }

	},

	handleChange(inputField, e){
    this.setState({[inputField]: e.target.value})
	},

	submitNewPost(e) {
    e.preventDefault()
    this.setState({userId: this.props.userState.user.id}) 

    fetch('http://localhost:5000/api/post/', {
      method:'post',
      headers: {
        'Accepted': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        image: this.state.image,    
        body: this.state.body,    
        author: this.props.userState.user.username,    
        tags: this.state.tags,  
        price: this.state.price,  
        phone: this.state.phone, 
        year: this.state.year,
        brand: this.state.brand,
        location: this.state.location,    
        payments_accepted: this.state.payments_accepted,
        userId:this.props.userState.user.id
      })
    })
    .then((response) => {
      console.log('Response: ', response)
      return response.json()
    })
    .then((data) => {
      this.setState({postInfo: data})
      console.log('title:', this.state.postInfo.title)
      console.log('id:', this.state.postInfo.id)
      browserHistory.push(`/posts/${this.state.postInfo.id}`)
    })

	},

  //@CreatePostForm: variable that points to the post form to make less convoluted our ternery expression inside of the render return  
	render(){
    console.log('this.props create-post ',this.props)
    console.log('state:', this.state)
    let CreatePostForm = (
      <div className="row">
        <form onSubmit={this.submitNewPost} className="well form-horizontal">
         
          <div id="login-form" className="form-container" data-form-container style={{color:'rgb(87, 104, 135)',background:'#B3E5FC',padding:'20px',}}>

            <div className="row">
              <div className="form-title">
                <span>Place an Ad To Sale Your Car</span>
              </div>
            </div>

            
            <div className="form-group">
              <label className="col-md-4 control-label">Title</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-text-width"></i></span>
              <input  onChange={this.handleChange.bind(this, 'title')} type="text" name="title"  placeholder="Post Title" className="form-control"  required="required"  autoFocus/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Image Link</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
              <input  onChange={this.handleChange.bind(this, 'image')} type="text" name="image"  placeholder="Image Link" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Car Description</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                      <textarea onChange={this.handleChange.bind(this, 'body')} type="text" name="body"  placeholder="Car Description" className="form-control" required></textarea>
              </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Category</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>

               <select onChange={this.handleChange.bind(this, 'tags')} type="text" name="tags" className="form-control selectpicker" required>

                  <option value="">Please select</option>
                  <option value="New">New</option>
                  <option value="Semi-New">Semi-New</option>
                  <option value="Used">Used</option>
                  <option value="Broken">Broken</option>
               </select>
                </div>
              </div>
            </div>


            <div className="form-group">
              <label className="col-md-4 control-label">Price</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-tags"></i></span>
              <input  onChange={this.handleChange.bind(this, 'price')} type="text" name="price"  placeholder="Price" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Car's Year</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-bookmark"></i></span>
              <input  onChange={this.handleChange.bind(this, 'year')} type="text" name="year"  placeholder="Year" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Car Brand</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input  onChange={this.handleChange.bind(this, 'brand')} type="text" name="brand"  placeholder="Brand" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Location</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
              <input  onChange={this.handleChange.bind(this, 'location')} type="text" name="location"  placeholder="Location" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Payments Accepted</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-check"></i></span>
              <input  onChange={this.handleChange.bind(this, 'payments_accepted')} type="text" name="payments_accepted"  placeholder="Payments Accepted" className="form-control"required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Phone</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
              <input  onChange={this.handleChange.bind(this, 'phone')} type="text" name="phone"  placeholder="(646) 360 04 10" className="form-control" required/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>  
              <div className="col-md-4">
                <center>
                  <button type="submit" className="btn btn-success" style={{height:'40px', width:'153px'}}>Save <span className="glyphicon glyphicon-send"></span></button>
                </center>
              </div>
            </div>

        

            

            </div>
        </form>
      </div>
    )

    return(
      <div>
        { 
          (this.props.userState.user) ?
          (<div className="container">{CreatePostForm}</div>):
          (
           <div>
                <LoginForCreatePost />
           </div>
          )  
        }
      </div>
		
		)
	}
})

//@mapStoreToProps: makes available the userState from our redux state
const mapStoreToProps = store => (
  {userState: store.userReducer}
)

export default connect(mapStoreToProps, userActions)(CreatePost);

