import React from 'react';
import 'TitleBar.styles.scss';

function TitleBar() {
  return (
    <div>
      <div className="title-bar"></div>
      <div className="minimize_button">-</div>
      <div className="close_button">x</div>
    </div>
  );
}

export default TitleBar;
