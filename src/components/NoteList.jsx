import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utilis/data";


function NoteList ({notes}){
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} 
                    formattedDate={showFormattedDate(note.createdAt)}{...note}/>
                ))
            }
        </div>
    );
}

export default NoteList;