import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Buttons from './Buttons';

function List({ list, toggleDone, deleteList, clear, setFilterType }) {

  const handleDeleteList = (e, id) => {
    e.stopPropagation();
    deleteList(id);
  };

  return (
    <div className="listWrap">
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className={`${item.isDone ? 'done' : ''}`}
            onClick={() => toggleDone(item.id)}
          >
            {item.isDone && <FontAwesomeIcon icon={faCheck} />}
            <span style={{textDecoration: item.isDone ? "line-through" : "none"}}>{item.text}</span>
            <button type="button" onClick={(e) => handleDeleteList(e, item.id)}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </li>
        ))}
      </ul>
      <Buttons setFilterType={setFilterType} clear={clear} />
    </div>
  );
}

export default List;
