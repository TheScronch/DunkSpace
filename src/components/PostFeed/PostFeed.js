import React from 'react';
import Post from './Post/Post';

class PostFeed extends React.Component {

  render () {
    let postArr = [...this.props.posts];
    
    postArr =  postArr.reverse().map(( post, i ) => {
        return <Post
          key={i}
          subject={post.subject}
          body={post.body} />
    });

    return (
      <div className='shadowBox halfWidth'>
        {postArr.length === 0 ? (
          <p>Type in the input field above, then press 'Post' to post your status.</p>
        ) : (
          <p>{postArr}</p>
        )}
      </div>
    )
  }
}

export default PostFeed;