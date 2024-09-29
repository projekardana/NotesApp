import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utilis/data";

function NotesApp (){
    const notes = getInitialData();

    return (
        <div className="note-app">
            <h1 className="header">Catatan Aktif</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default NotesApp;