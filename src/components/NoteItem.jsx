import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './Archive';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="note-item__title">
      <NoteItemBody title={title} />
      <div className="note-item__date">
        <span>{createdAt}</span>
      </div>
      <div className="note-item__body">
        <p>{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
      <div className="note-item__archive-button">
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
