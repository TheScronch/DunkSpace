import React from 'react';
import Post from './Post/Post';
import './PostFeed.css';

class PostFeed extends React.Component {

  render () {
    let postArr = [...this.props.posts];
    
    postArr =  postArr.reverse().map(( post, i ) => {
        return <Post
          key={i}
          subject={post.subject}
          body={post.body} 
          removePost={() => this.props.removePost(i)}/>
    });

    return (
      <React.Fragment>
        {postArr.length !== 0 && 
        <div className='shadowBox postFeed'>
          {postArr}
        </div>}
      </React.Fragment>
    )
  }
}


export default PostFeed;