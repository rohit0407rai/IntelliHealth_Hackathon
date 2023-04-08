import React from "react";
import Dropdown from "./Dropdown";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
                <Dropdown/>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;