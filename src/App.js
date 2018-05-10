import React, { Component } from 'react';
import Cockpit from './components/Cockpit';
import PostFeed from './components/PostFeed';
import './App.css';

class App extends Component {
  state = {
    postSubject: "",
    postText: "",
    posts: []
  };

  handlePostSubmit = (event) => {
    const newPostArr = this.state.posts;
    newPostArr.push( {subject: this.state.postSubject, text: this.state.postText} );

    this.setState({ 
      posts: newPostArr,
      postSubject: "",
      postText: ""}
    );
    
    event.preventDefault();
  }

  handlePostChange = (event) => {
    this.setState({ postText: event.target.value });
  }

  handleSubjectChange = (event) => {
    this.setState({ postSubject: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1 className="shadowBox">DunkSpace!</h1>
        <Cockpit
          postSubject={this.state.postSubject}
          postText={this.state.postText}
          changePost={this.handlePostChange}
          changeSubject={this.handleSubjectChange}
          submit={this.handlePostSubmit}/>
        <PostFeed 
          post={this.state.postOutput}
          posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
