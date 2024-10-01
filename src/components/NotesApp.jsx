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
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input type="text" placeholder="Cari Catatan ..." />
          </div>
        </header>

        <main className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} />
          {notes.length > 0 ? (
            <NoteList notes={notes} onDelete={this.onDeleteHandlere} />
          ) : (
            <div className="note-list__empty-message">Tidak ada Catatan.</div>
          )}
        </main>
      </div>
    );
  }
}

export default NotesApp;
