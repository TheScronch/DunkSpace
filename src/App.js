import React from 'react';
import Header from './components/Header/Header';
import FormContainer from './components/FormContainer/FormContainer';
import PostFeed from './components/PostFeed/PostFeed';
import './App.css';

class App extends React.Component {
    constructor( props ) {
      super( props )
    this.state = {
      posts: []
    };
  }

  addPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  }

  render() {
    return (
      <div className="App">
        <Header title={this.props.title}/>
        <FormContainer addPost={this.addPost}/>
        <PostFeed posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
