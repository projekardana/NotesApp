import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utilis/data";
import NoteInput from "./NoteInput";


class NotesApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                    }
                ]
            }
        });
    }

    render(){
        return (
            <div>
                <div className="note-app__header">
                    <h1 className="header">Buat Catatan</h1>
                    <NoteInput AddNote={this.onAddNoteHandler}/>
                </div>
                <div className="note-app__title">
                    <h1>Catatan Aktif</h1>
                    <NoteList notes={this.state.notes}/>
                </div>
            </div>
        );
    }
}

export default NotesApp;