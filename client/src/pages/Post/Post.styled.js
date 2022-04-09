import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const PostTitle = styled.div`
  border-radius: 15px;
  width: 750px;
  width: 100%;
  padding: 15px;
  //text-align: center;
  //padding: 0;
  //margin: 5px 0 22px 0;
  margin-bottom: 10px;
  display: inline-block;
  border: none;
  background: #fff;
  font-size: 16px;
  height: 38px;

  &:focus {
    background-color: #ddd;
    outline: none;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
  }
`;

export const WrapperTextArea = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //text-align: center;
  //margin: auto;
  //color: black;
  //font-size: 14px;

  width: 100%;
  //width: 750px;
  border-radius: 15px;
  background: white;
  padding: 25px 25px 30px;
`;

export const PostText = styled.div`
  //text-align: center;

  width: 100%;
  //height: 58px;
  height: 100%;
  margin: auto;
  color: black;
  font-size: 16px;
  resize: none;
  outline: none;
  padding: 15px;
  border-radius: 5px;

  margin-top: 10px;
  border-color: green;
  //max-height: 330px;

  white-space: pre-wrap;
  word-wrap: break-word; //new
`;

export const PostTextWrap = styled.button`
  //border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

export const DataPostPath = styled.div`
  //border: 1px solid green;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-left: 0;

  color: white;
  background-color: ${BRIGHT};
  //margin-top: 1px;
  font-size: medium;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  //flex: 1;
  //min-height: 0;
  width: 100%;
`;

export const PostTextLabelAuthor = styled.div`
  //text-align: center;
  //margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px solid ${DEFAULT};
  border-radius: 15px;
  //color: black;
  font-size: 16px;
  text-align: center;
  width: 33%;
  margin-right: 10px;

  //width: 200px;
`;

export const PostTextLabelDate = styled.div`
  //text-align: center;
  //margin: auto;
  border: 5px solid ${DEFAULT};
  border-radius: 15px;
  //color: black;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 10px;
  //width: 200px;
`;

export const ReplyLabelTopText = styled.div`
  //border: 1px solid green;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  margin: auto;
  padding: 15px;
  color: white;
  //background-color: ${DARK};
  background-color: transparent;
  //margin-top: 1px;
  font-size: medium;
  width: 20%;
`;

export const AddReplyBtn = styled.button`
  //border: 1px solid green;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  font-size: 50px;
  padding: 15px;
  color: white;
  background-color: ${DARK};
  //margin-top: 1px;
  font-size: medium;
  //height: 40px;
  //flex: 1;
  //min-height: 0;
  //width: 70%;
  width: ${(props) => props.width || '100%'};
`;

export const WrapperCommentArea = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //text-align: center;
  //margin: auto;
  //color: black;
  //font-size: 14px;

  width: 100%;
  //width: 750px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 10px;
  border-radius: 15px;
  background: white;
  padding: 25px 25px 30px;
`;

export const CommentAreaLabel = styled.div`
  //text-align: center;
  //margin: auto;

  color: ${(props) => (props.color === 'red' ? 'red' : 'black')};
  //color: black;
  font-size: 16px;
  text-align: center;
`;

export const CommentArea = styled.textarea`
  //text-align: center;

  width: 100%;
  //height: 58px;
  height: 100px;
  margin: auto;
  color: black;
  font-size: 16px;
  resize: none;
  outline: none;
  padding: 15px;
  border-radius: 5px;

  margin-top: 10px;
  border-color: green;
  max-height: 330px;

  :is(:focus, :valid) {
    border-width: 2px;
    padding: 10px;
    border-color: ${DEFAULT};
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const CommentPostButton = styled.button`
  //border: 1px solid red;
  //border: 1px solid green;
  display: ${(props) => props.display || 'none'};
  //display: none;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  font-size: 50px;
  padding: 15px;
  color: white;
  background-color: ${DARK};
  //margin-top: 1px;
  font-size: medium;
  //height: 40px;
  //flex: 1;
  //min-height: 0;
  width: 100%;

  &:hover {
    background-color: ${BRIGHT};
  }
`;

export const WrapCommentAdd = styled.div`
  //border: 1px solid red;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const WrapCommentButtons = styled.div`
  //border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

// REPLIES

export const ReplyDiv = styled.div`
  //border: 2px solid red;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  //justify-content: center;
  //align-items: center;

  //display: flex;
  //display: inline-flex;
  //background-color: white;
  margin: 10px auto;
  //flex: 1;
`;

export const ReplyText = styled.div`
  //border: 1px solid blue;
  overflow: hidden;
  border-radius: 5px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  padding-top: 5px;
  //min-height: 0;
  height: 100%;
  //NEW
  white-space: pre-wrap;
  word-wrap: break-word; //new
`;

export const ReplyLabel = styled.div`
  //text-align: center;
  //margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px solid white;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  text-align: center;
  width: 33%;
  margin-right: 10px;
`;
