import React from 'react';
import Post from './Post/Post';

class PostFeed extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    let postArr = [...this.props.posts];
    
    postArr =  postArr.reverse().map(( post, i ) => {
        return <Post
          key={i}
          subject={post.subject}
          body={post.body} />
    });

    console.log("I rendered");

    return (
      <div className='shadowBox halfWidth'>
        {postArr.length === 0 ? (
          <h3>Type in the input field above, then press 'Post' to post your mindless narcissistic self-masturbatory status.</h3>
        ) : (
          <h3>{postArr}</h3>
        )}
      </div>
    )
  }
}

export default PostFeed;