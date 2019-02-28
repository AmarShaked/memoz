import React from 'react';
import cx from 'classnames';
import MemoLine from '../../components/MemoLine';
import useMemorizationReducer from '../../ducks/memorizations/reducer';
import useLocalStorage from '../../hooks/localStorage';
import './App.css';
import { addMemo } from '../../ducks/memorizations/actions';
import ActionBar from '../../components/ActionBar';
import { LS_DARK_MODE, LS_RTL_MODE } from '../../constants/localStorage';
import Header from '../../components/Header';

const App = () => {
  const [state, memorizationDispatcher] = useMemorizationReducer();
  const [dark, setDarkMode] = useLocalStorage(LS_DARK_MODE, false);
  const [rtl, setRTLMode] = useLocalStorage(LS_RTL_MODE, false);

  const handleAddItemClick = () => {
    memorizationDispatcher(addMemo());
  };

  const handleThemeChange = () => {
    setDarkMode(!dark);
  };

  const handleRTLChange = () => {
    setRTLMode(!rtl);
  };

  return (
    <div className={cx('App', { dark, rtl })}>
      <Header />
      {state.map(memoLine => (
        <MemoLine
          key={memoLine.id}
          id={memoLine.id}
          title={memoLine.title}
          memorization={memoLine.memorization}
          dispatch={memorizationDispatcher}
        />
      ))}
      <button className="App_add_btn" type="button" onClick={handleAddItemClick}>
        <span>Add item</span>
      </button>

      <ActionBar
        onDirectionChange={handleRTLChange}
        onThemeChange={handleThemeChange}
      />
    </div>
  );
};

export default App;
