import React from 'react';

function Todo({title, desc, image, done, createdAt, Key, setDone}) {
  return (
    <div>
      <div>{done ? <del>{title}</del> : title}</div>
      <button
        className="button is-success"
        title={title}
        disabled={done}
        onClick={() => setDone(Key)}>
        Save
      </button>
      <button className="button is-danger" title={title} disabled={done}>
        Remove
      </button>
    </div>
  );
}

export {Todo};
