import React from 'react';
import NoteItem from './NoteItem';
import { showFormattedDate } from '../utilis/data';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          createdAt={showFormattedDate(note.createdAt)}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
