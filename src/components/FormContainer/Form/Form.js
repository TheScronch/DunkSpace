import React from 'react';

const form = (props) => {
    return(
        <div className="shadowBox halfWidth">
            <form 
            className="postForm"
            onSubmit={props.submit}>
                <textarea 
                    type="text"
                    className="inputText inputSubject"
                    name="postSubject"
                    placeholder="Subject" 
                    value={props.postSubject}
                    onChange={props.change}/>
                <textarea 
                    type="text"
                    className="inputText inputBody"
                    name="postBody"
                    placeholder="Write your status here..."
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