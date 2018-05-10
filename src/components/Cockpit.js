import React from 'react';

const cockpit = (props) => {
    return (
        <div className="shadowBox halfWidth">
            <form 
                className="postForm"
                onSubmit={props.submit}>
                Subject
                <input 
                    type="text"
                    className="inputText"
                    value={props.postSubject}
                    onChange={props.changeSubject}/>
                Body 
                <input 
                    type="text"
                    className="inputText"
                    value={props.postText}
                    onChange={props.changePost}/>
                <input 
                    type="submit"
                    value="Post" />
            </form>
        </div>
    )
}

export default cockpit;