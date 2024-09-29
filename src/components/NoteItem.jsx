import React from "react";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utilis/data";

function NoteItem ({title, body, createdAt}){
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} createdAt={showFormattedDate(createdAt)}/>

        </div>
    );
}

export default NoteItem;

