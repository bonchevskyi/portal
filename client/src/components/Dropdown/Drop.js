import React from 'react';
import {
  DropDownBtn,
  DropDownContent,
  DropDownLi,
  DropDownItem,
} from './Drop.styled';

function Drop() {
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
