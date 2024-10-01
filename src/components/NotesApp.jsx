import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utilis/data';
import NoteInput from './NoteInput';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-app__search"></div>
          <input type="text" placeholder="Cari Catatan ..." />
        </div>
        <div className="note-app__header">
          <h2>Buat Catatan</h2>
          <div className="note-input">
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <div className="note-app__title">
            <h2>Catatan Aktif</h2>
            <NoteList notes={this.state.notes} />
          </div>
        </div>
      </div>
    );
  }
}

export default NotesApp;
