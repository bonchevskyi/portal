import React, { useState } from 'react';
//import { MenuItems } from './MenuItems';
//import './Dropdown.css';
import { Link } from 'react-router-dom';
import {
  DropDownBtn,
  DropDownContent,
  DropDownLi,
  DropDownItem,
} from './Drop.styled';

function Drop() {
  //const handleClick = (action) => {};

  return (
    <>
      <DropDownLi>
        <DropDownBtn>DROPDOWN</DropDownBtn>
        <DropDownContent>
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem>Setting</DropDownItem>
          <DropDownItem>Logout</DropDownItem>
        </DropDownContent>
      </DropDownLi>
    </>
  );
}

export default Drop;
