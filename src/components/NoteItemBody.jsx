import React from "react";


function NoteItemBody({title, body, createdAt}){
    return (
        <div className="note-app__content">
            <h3 className="note-app__title">{title}</h3>
            <p className="note-app__body">{body}</p>
            <p className="note-app__createdAt">{createdAt}</p>
        </div>
    );
}

export default NoteItemBody;