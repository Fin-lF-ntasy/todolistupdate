import React from "react";
import {useState} from 'react';
import {StarFilled} from '@ant-design/icons';

function UncompletedTask({todo, changeFavorite, changeDone}) {
  const [starStyle, setStarStyle] = useState({fontSize: '16px', color: '#d9d9d9'});
  const changeStar = () => {
    if (starStyle.color === '#d9d9d9') {
      setStarStyle({fontSize: '16px', color: '#ffcc00'});
    }
    if (starStyle.color === '#ffcc00') {
      setStarStyle({fontSize: '16px', color: '#d9d9d9'});
    }
  }

  const appliedDone = () => {
    changeDone(todo);
  }
  const appliedFavorite = () => {
    changeStar();
    changeFavorite(todo);
  }

  return (
    <li>
      <div className="wrapItem spacebetween">
        <div>
          <input type="checkbox" onClick = {() => appliedDone()}/>
          <label>{todo}</label>
        </div>
        <span onClick = {() => appliedFavorite()}>
          <StarFilled style = {starStyle}/>
        </span>

      </div>
    </li>
  );
}

export default UncompletedTask;
