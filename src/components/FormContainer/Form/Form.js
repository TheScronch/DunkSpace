import React from 'react';

const form = (props) => {
    return(
        <div className="shadowBox halfWidth">
            <form 
            className="postForm"
            onSubmit={props.submit}>
                <input 
                    type="text"
                    className="inputText"
                    name="postSubject"
                    value={props.postSubject}
                    onChange={props.change}/>
                <input 
                    type="text"
                    className="inputText inputBody"
                    name="postBody"
                    value={props.postBody}
                    onChange={props.change}/>
                <input 
                    type="submit"
                    className="submitButton"
                    value="Post" />
            </form>
        </div>
    )
}

export default form;