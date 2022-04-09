import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { Container, WrapGlobal, FullLine } from '../../GlobalStyles';
import { InfoSection } from '../../components';
import {
  CreateFormContent,
  CreateFormH1,
  WrapperTextArea,
  TextArea,
  PostTitle,
  PostText,
  PostTextLabelAuthor,
  PostTextLabelDate,
  PostTextWrap,
  DataPostPath,
  ReplyLabel,
  ReplyLabelTopText,
  AddReplyBtn,
  CommentArea,
  CommentAreaLabel,
  WrapperCommentArea,
  CommentPostButton,
  WrapCommentAdd,
  WrapCommentButtons,
  ReplyDiv,
  ReplyText,
} from './Post.styled';
import { noPostObj, noRepliesObj } from '../../components/InfoSection/Data';

function Post() {
  const navigate = useNavigate();

  const { auth, setAuth } = useAuth();

  //const { search } = useLocation();
  //console.log('SEARCH: ', search);

  var params = useParams();
  console.log('PARAMS: ', params);
  const postID = params.id;

  const [charCountArea, setCharCountArea] = useState(0);
  const [commentarea, setCommentArea] = useState('');
  const [commentareaColor, setCommentAreaColor] = useState('');

  const [postData, setPostData] = useState({});
  const [replies, setReplyData] = useState({});
  const [isRepliesZero, setIsRepliesZero] = useState(true);

  const [isCommentDisabled, setIsCommentDisabled] = useState(true);

  const [postExist, setPostExist] = useState(false);

  const [showComment, setShowComment] = useState(false);

  const [buttonText, setButtonText] = useState('DODAJ ODPOWIEDŹ');
  const [displayBtn, setDisplayBtn] = useState('none');

  const [btnWidth, setBtnWidth] = useState('100%');

  const charMaxArea = 2048;

  //console.log('PARAMS: ', params);

  const [isLoading, setIsLoadiing] = useState(false);

  const loadScreen = (timeMS) => {
    setIsLoadiing(true);
    //console.log('LOADING STARTED');
    setTimeout(() => {
      setIsLoadiing(false);
      //console.log('LOADING ENDED');
    }, timeMS);
  };

  const getPostData = async () => {
    console.log('POST ID IN HERE', postID);
    try {
      const response = await axios.get('/post/get', {
        params: {
          postID: postID,
        },
      });
      console.log('DATA:', response?.data[0]);
      if (Object.keys(response?.data[0]).length > 0) {
        console.log('DATA EXIST');
        setPostExist(true);
      } else {
        console.log('NO DATA EXIST');
        setPostExist(false);
      }
      setPostData(response?.data[0]);
    } catch (error) {
      console.log('University GET data ERROR: ', error);
    }
  };

  const getPostReplies = async () => {
    console.log('POST ID IN HERE', postID);
    try {
      const response = await axios.get('/reply/get', {
        params: {
          postID: postID,
        },
      });
      const data = response.data;
      console.log('== == == REPLY DATA ===', data);
      if (data.length > 0) {
        console.log('REPLIES EXIST');
        const replys = Array.from(data);
        setReplyData(replys);
        setIsRepliesZero(false);
      } else {
        console.log('NO REPLIES!!!!');
        setIsRepliesZero(true);
      }
    } catch (error) {
      console.log('REply GET data ERROR: ', error);
    }
  };

  const handleAdd = () => {
    //console.log('========================e======================');
    //console.log(e);
    setShowComment(!showComment);
    // var property = document.getElementById(btnAdd);
    if (showComment) {
      setDisplayBtn('none');
      setBtnWidth('100%');
      setButtonText('DODAJ ODPOWIEDŹ');
    } else {
      setDisplayBtn('inline');
      setBtnWidth('30%');
      setButtonText('Zamknij');
    }
  };

  useEffect(() => {
    loadScreen(700);
    getPostData();
    getPostReplies();

    return () => {
      console.log(
        '!!!!!!!!!!!!!!!!!!!!!!!!!!CLEANUP DASHBOARD!!!!!!!!!!!!!!!!!!!'
      );
      setIsLoadiing(false);
    };
  }, []);

  useEffect(() => {
    if (commentarea.trim()) {
      setIsCommentDisabled(false);
    } else {
      setIsCommentDisabled(true);
    }
    return () => {};
  }, [commentarea]);

  const postReply = async (e) => {
    e.preventDefault();
    loadScreen(700);
    //console.log('WE GOT:');
    //console.log(commentarea);
    var usrID = auth.user_id;

    try {
      const response = await axios.post('/reply/new', {
        post_id: postData.id,
        user_id: usrID,
        text: commentarea,
      });
      const data = response?.data;
      console.log(data);
      getPostReplies();
      navigate(`/post/${postID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    // weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapGlobal>
          <Container>
            {postExist ? (
              <>
                <DataPostPath>
                  {' '}
                  {postData.city_name} &#8594; {postData.university_name}{' '}
                  &#8594; {postData.department_name}
                </DataPostPath>
                <PostTitle type='text' name='title'>
                  {postData.title}
                </PostTitle>

                <WrapperTextArea>
                  <PostTextWrap>
                    <PostTextLabelAuthor>
                      Autor: {postData.username}
                    </PostTextLabelAuthor>
                    <PostTextLabelAuthor>
                      Stworzono:{' '}
                      {new Date(postData.created).toLocaleDateString(
                        'en-GB',
                        options
                      )}
                    </PostTextLabelAuthor>
                    <PostTextLabelAuthor>
                      Zaktualizowano:{' '}
                      {new Date(postData.updated).toLocaleDateString(
                        'en-GB',
                        options
                      )}
                    </PostTextLabelAuthor>
                  </PostTextWrap>
                  <PostText
                    id='textarea'
                    //value={textarea}
                    placeholder='Type something...'
                  >
                    {postData.text}
                  </PostText>
                </WrapperTextArea>

                <WrapCommentAdd>
                  <WrapCommentButtons>
                    <AddReplyBtn onClick={handleAdd} width={btnWidth}>
                      {buttonText}
                    </AddReplyBtn>
                    <CommentPostButton
                      disabled={isCommentDisabled}
                      display={displayBtn}
                      onClick={postReply}
                    >
                      Odpowiedzieć
                    </CommentPostButton>
                  </WrapCommentButtons>

                  {showComment && (
                    <>
                      <WrapperCommentArea>
                        <CommentAreaLabel color={commentareaColor}>
                          Liczba znaków: {charCountArea} (max: {charMaxArea})
                        </CommentAreaLabel>
                        <CommentArea
                          maxLength={charMaxArea}
                          id='textarea'
                          value={commentarea}
                          placeholder='Odpowiedź...'
                          onChange={(e) => {
                            setCharCountArea(e.target.value.length);
                            setCommentArea(e.target.value);
                          }}
                          required
                        ></CommentArea>
                      </WrapperCommentArea>
                    </>
                  )}
                </WrapCommentAdd>
                <br />
                <ReplyLabelTopText>
                  ODPOWIEDZI ({replies.length || 0})
                </ReplyLabelTopText>
                <FullLine></FullLine>

                {isRepliesZero ? (
                  <>
                    <InfoSection {...noRepliesObj} />
                  </>
                ) : (
                  <>
                    {replies.map((reply, key) => (
                      <>
                        <ReplyDiv>
                          <PostTextWrap>
                            <ReplyLabel>Autor: {reply.username}</ReplyLabel>
                            <ReplyLabel>
                              Stworzono:{' '}
                              {new Date(reply.created).toLocaleDateString(
                                'en-GB',
                                options
                              )}
                            </ReplyLabel>
                            <ReplyLabel>
                              Zaktualizowano:{' '}
                              {new Date(reply.updated).toLocaleDateString(
                                'en-GB',
                                options
                              )}
                            </ReplyLabel>
                          </PostTextWrap>

                          <ReplyText>{reply.text}</ReplyText>
                        </ReplyDiv>
                        <br />
                      </>
                    ))}
                  </>
                )}
              </>
            ) : (
              <InfoSection {...noPostObj} />
            )}
          </Container>
        </WrapGlobal>
        //LOADIN END
      )}
    </>
  );
}

export default Post;
