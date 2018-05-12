import React from 'react';
import FormContainer from './components/FormContainer/FormContainer';
import PostFeed from './components/PostFeed/PostFeed';
import './App.css';

class App extends React.Component {
  state = {
    posts: []
  };

  addPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  }

  // handlePostSubmit = (event) => {
  //   let newPostArr = this.state.posts;
  //   console.log(newPostArr);
  //   newPostArr.push( {subject: this.state.postSubject, text: this.state.postText} );

  //   this.setState({ 
  //     posts: newPostArr,
  //     postSubject: "",
  //     postText: ""}
  //   );
  //   console.log(this.state.posts);
  //   this.state.posts.reverse();
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="App">
        <h1 className="shadowBox">DunkSpace!</h1>
        <FormContainer
          addPost={this.addPost}/>
        <PostFeed 
          posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
