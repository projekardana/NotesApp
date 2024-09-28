import React from "react";
import NoteItemBody from "./NoteItemBody";


function NoteItem {(title, body, date)}{
    return (
        <div className="note-item">
            <NoteItem title={title}/>
            <NoteItem body={body}/>
            <NoteItem date={date}/>
        </div>
    );
}

export default NoteItem;


