import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utilis/data";

function NotesApp (){
    const note = getInitialData();

    return (
        <div className="note-app">
            <h1 className="header">Catatan Aktif</h1>
            <NoteList note={note} />
        </div>
    );
}

export default NotesApp;