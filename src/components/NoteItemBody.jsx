import React from "react";


function NoteItemBody({header, textarea}){
    return (
        <div className="note-app__body">
            <h2 className="note-app__header">{header}</h2>
            <p className="note-app__textarea">{textarea}</p>
        </div>
    );
}

export default NoteItemBody;