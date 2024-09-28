import React from "react";
import NoteItem from "./NoteItem";


function NoteList (note){
    return (
        <div className="note-list">
            {
                note.map((note) => {
                    <NoteItem key={note.id} {...note}/>
                })
            }
        </div>
    );
}

export default NoteList;