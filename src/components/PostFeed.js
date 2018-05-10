import React from 'react';
import Post from './Post';

const postFeed = (props) => {
    let posts = (
        props.posts.map( post => {
            return <Post
                        subject={post.subject}
                        post={post.text} />
        } )
    );

    return (
        <div className='shadowBox halfWidth'>
            { posts.length === 0 &&
                <h3>Type in the input field above, then press 'Post' to post your mindless narcissistic self-masturbatory status.</h3>
            }
            {posts}
        </div>
    )
}

export default postFeed;