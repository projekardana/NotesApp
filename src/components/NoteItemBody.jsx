import React from "react";


function NoteItemBody({title, createdAt,body}){
    return (
        <div className="note-app__content">
            <h3 className="note-app__title">{title}</h3>
            <p className="note-app__createdAt">{createdAt}</p>
            <p className="note-app__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;