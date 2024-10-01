import React from 'react';
import NoteItemBody from './NoteItemBody';

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="note-item__title">
      <NoteItemBody title={title} />
      <div className="note-item__date">
        <NoteItem createdAt={createdAt} />
        <div className="note-item__body">
          <NoteItem body={body} />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
