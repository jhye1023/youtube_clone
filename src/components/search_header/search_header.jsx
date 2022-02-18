import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.bars} src="/image/bars.png" alt="bars" />
        <a href="/" className={styles.moveHome}>
          <img className={styles.image} src="/image/logo.png" alt="logo" />
          <div className={styles.title}>Youtube</div>
        </a>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImage}
            src="/image/search.png"
            alt="search"
          />
        </button>
        <button className={styles.microphoneButton} type="submit">
          <img
            className={styles.microphone}
            src="/image/microphone.png"
            alt="microphone"
          />
        </button>
      </div>
      <div className={styles.icons}>
        <img className={styles.video} src="/image/video.png" alt="video" />
        <img className={styles.th} src="/image/th.png" alt="th" />
        <img className={styles.bell} src="/image/bell.png" alt="bell" />
        <img className={styles.jihye} src="/image/jihye.png" alt="jihye" />
      </div>
    </header>
  );
};

export default SearchHeader;
