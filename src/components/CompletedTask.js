import React from "react";
import {StarFilled} from '@ant-design/icons';
function CompletedTask({todo}) {

  return (
      <li>
        <div className="wrapItem spacebetween">
          <div>
            <input type="checkbox" />
            <label>{todo}</label>
          </div>
          <span>
            <StarFilled style = {{fontSize: '16px', color: '#d9d9d9'}} />
          </span>

        </div>
      </li>
  );
}

export default CompletedTask;
