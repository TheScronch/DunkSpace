import React from 'react';

const post = (props) => {
  return(
    <div className='shadowBox'>
      <h3>{props.subject}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default post;