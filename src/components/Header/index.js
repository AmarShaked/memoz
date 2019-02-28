import React, { useRef, useEffect } from 'react';
import useLocalStorage from '../../hooks/localStorage';
import { LS_HEADER } from '../../constants/localStorage';

import './Header.css';

const Header = () => {
  const [header, setHeader] = useLocalStorage(LS_HEADER, 'Scales Memorization');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);


  return (
    <header className="Header">
      <input
        ref={inputRef}
        value={header}
        onChange={e => setHeader(e.target.value)}
        className="Header_input"
        type="text"
      />
    </header>
  );
};

export default Header;
