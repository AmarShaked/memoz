import React from 'react';

import './MemoLine.css';
import {
  removeMemoCycle,
  completeMemoCycle,
  changeMemoTitle,
  deleteMemo,
} from '../../ducks/memorizations/actions';
import Checkbox from '../Checkbox';

const MemoLine = ({
  dispatch, title, memorization, id,
}) => {
  const handleMemoTitleChange = (e) => {
    dispatch(changeMemoTitle(id, e.target.value));
  };

  const handleMemoRepeatChange = (i, value) => {
    if (!title) {
      return;
    }

    if (i === memorization.length - 1) {
      dispatch(completeMemoCycle(id));
    }

    if (i === memorization.length - 2) {
      if (!value) {
        dispatch(removeMemoCycle(id));
      }
    }
  };

  const handleDeleteMemo = () => {
    dispatch(deleteMemo(id));
  };

  return (
    <div className="MemoLine">
      <div className="MemoLine_input_container">
        <input
          className="MemoLine_input"
          onChange={handleMemoTitleChange}
          placeholder="Memo item"
          value={title}
          aria-label="Memo item title"
          type="text"
        />
        <span onClick={handleDeleteMemo} className="MemoLine_delete">Delete</span>
      </div>

      <div className="MemoLine_RepeatList">
        {memorization.map((repeat, i) => (
          <Checkbox
            onChange={value => handleMemoRepeatChange(i, value)}
            value={repeat}
            index={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoLine;
