import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { modeActions } from '../../redux/mode-slice';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(modeActions.setMode());
  };

  return (
    <header className={`${styles.header} ${styles[mode]}`}>
      <div onClick={() => navigate('/')}>logo</div>
      <h1 onClick={() => navigate('/')}>last.fm</h1>
      <Button variant='secondary' onClick={handleChangeTheme}>
        {mode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
};

export default Header;
