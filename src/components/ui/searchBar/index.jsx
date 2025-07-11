import React from 'react';
import styles from './styles.module.css';
import searchIcon from '@/assets/icons/Search.svg';

const SearchBar = ({ placeholder, className, icon, ...props }) => {
  return (
    <div className={`${styles.searchBarContainer} ${className || ''}`}>
      <img src={icon || searchIcon} alt="Input icon" className={styles.searchIcon} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        {...props}
      />
    </div>
  );
};

export default SearchBar;