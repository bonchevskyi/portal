import styled from 'styled-components';
import { DEFAULT, DARK, BRIGHT } from '../../GlobalStyles';

export const PostTitle = styled.div`
  border-radius: 15px;
  width: 750px;
  width: 100%;
  padding: 15px;
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
  width: 100%;
  border-radius: 15px;
  background: white;
  padding: 25px 25px 30px;
`;

export const PostText = styled.div`
  width: 100%;
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
  white-space: pre-wrap;
  word-wrap: break-word;
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
  font-size: medium;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  width: 100%;
`;

export const PostTextLabelAuthor = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px solid ${DEFAULT};
  border-radius: 15px;
  font-size: 16px;
  text-align: center;
  width: 33%;
  margin-right: 10px;
`;

export const PostTextLabelDate = styled.div`
  border: 5px solid ${DEFAULT};
  border-radius: 15px;
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-left: 10px;
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
  background-color: transparent;
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
  font-size: medium;
  width: ${(props) => props.width || '100%'};
`;

export const WrapperCommentArea = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 0;
  margin-bottom: 10px;
  border-radius: 15px;
  background: white;
  padding: 25px 25px 30px;
`;

export const CommentAreaLabel = styled.div`
  color: ${(props) => (props.color === 'red' ? 'red' : 'black')};
  font-size: 16px;
  text-align: center;
`;

export const CommentArea = styled.textarea`
  width: 100%;
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
  display: ${(props) => props.display || 'none'};
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
  font-size: medium;
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
  margin: 10px auto;
`;

export const ReplyText = styled.div`
  //border: 1px solid blue;
  overflow: hidden;
  border-radius: 5px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  padding-top: 5px;
  height: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const ReplyLabel = styled.div`
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
