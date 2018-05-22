import React from 'react';

const post = (props) => {
  return(
    <div className='shadowBox'>
      <button className='deleteButton' onClick={props.removePost}>X</button>
      {props.subject !== "" && <h3>{props.subject}</h3>}
      <p>{props.body}</p>
    </div>
  )
}

export default post;