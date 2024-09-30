import React from "react";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utilis/data";

function NoteItem ({title, body, formattedDate}){
    return (
        <div className="note-item">
            <NoteItemBody title={title} formattedDate={formattedDate} body={body} />

        </div>
    );
}

export default NoteItem;

