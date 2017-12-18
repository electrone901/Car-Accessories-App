
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const SearchComponentForHome = React.createClass({
  getInitialState(){
    return {
      post:[],
      inputToSearch: '',
    }
  },

  submitNewPost: function (e) {
    e.preventDefault()
    this.refs.form.reset();
    var inputToSearch = this.state.inputToSearch;
    $.ajax({
  		url: "/api/post/search/" + inputToSearch,
  		method:'GET'
  	})
    .done((data)=>this.setState({post:data}))
  },

	handleChange: function(e) {
	this.setState({inputToSearch: e.currentTarget.value})
  },

 
  render(){
    let searchResult;
    if(this.state.inputToSearch) {
      if(this.state.post[0]) {
        searchResult = <div>Results for <strong>{this.state.inputToSearch}</strong></div>
      } else {
        searchResult = <div>Sorry not results for <strong>{this.state.inputToSearch}</strong></div>
      }

    } 
    return(
      <div style={{width:'100%', maxHeight:'300px',minHeight:'120px', overflowY:' scroll'}}>

        <form onSubmit={this.submitNewPost} ref="form">
          <input className='input-search' type="text" placeholder="Quick Search" onChange={this.handleChange} required="required"  autoFocus></input>

          <button type="submit" className="btn btn-success">Search</button>
        </form>

        {searchResult}

        <div className='middleForHome'>
          {this.state.post.map((ele,i)=>{
            return (
              <div key={i} className='gallery'>
                <Link to={'/posts/' +ele.id}><img src={ele.image} className='itemGallery'/></Link>
                <Link to={'/posts/' +ele.id}><h4 className='img-title'>{ele.title}</h4> </Link>
              </div>
            )
          })}
        </div>

        <div className="searchEmpty-container"></div>
      </div>
    )
  }
  
})

export default SearchComponentForHome;

