import React from 'react';

function ArchiveButton({ id, onArchive }) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        Arsipkan
      </button>
    </div>
  );
}

export default ArchiveButton;
