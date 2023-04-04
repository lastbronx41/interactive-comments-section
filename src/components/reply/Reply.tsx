import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//my imports
import { UserContext } from "../../contexts/UserContext";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ModalContext } from "../../contexts/ModalContext";
import TextArea from "../textarea/TextArea";
import Card from "../card/Card";
import Upvote from "../upvote/Upvote";
import Action from "../action/Action";
import Button from "../button/Button";
import { ReplyInterface } from "../../types/interfaces";
import ReplyStyles from "../comment/CommentStyles";

type ReplyProps = {
  reply: ReplyInterface;
  commentId: string;
};

//MAIN COMPONENT
function Reply({ reply, commentId }: ReplyProps) {
  const classes = ReplyStyles();
  const user = useContext(UserContext);
  const { dispatch } = useContext(CommentsContext);
  const { dispatch: modalDispatch } = useContext(ModalContext);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState(`@${reply.user.username},`);
  const [replyError, setReplyError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(reply.content);

  // event handlers
  const handleToggleReply = () => {
    setReplying(!replying);
  };
  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    setReplyText(event.target.value);
    setReplyError(false);
  };
  const handleEditChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    setEditText(event.target.value);
  };

  const handleReply = () => {
    console.log(replyText);
    console.log(reply.user.username);
    if (replyText.trim() === `@${reply.user.username},`) {
      setReplyError(true);
    } else {
      //select actual comment without the name in the default value
      let replyWithoutname = replyText
        .slice(reply.user.username.length + 2)
        .trim();
      dispatch({
        type: "REPLY",
        payload: {
          commentId,
          replyId: reply.id.toString(),
          reply: {
            id: uuidv4(),
            content: replyWithoutname,
            createdAt: "now",
            score: 0,
            replyingTo: reply.user.username,
            user,
          },
        },
      });
      setReplyText(`@${reply.user.username},`);
      setReplying(false);
    }
  };

  const handleEdit = () => {
    console.log(editText);
    dispatch({
      type: "EDIT",
      payload: { commentId, replyId: reply.id.toString(), update: editText },
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    modalDispatch({
      type: "SHOW_DELETE_MODAL",
      payload: {
        commentId,
        replyId: reply.id.toString(),
      },
    });
  };

  // conditional components
  // conditional components
  const userTag = user.username === reply.user.username && (
    <span className={classes.userTag}>you</span>
  );
  const deleteButton = user.username === reply.user.username && (
    <div className={classes.delete}>
      <Action action="delete" onClick={handleDelete} />
    </div>
  );
  const replyButton = (
    <div className={classes.reply}>
      {user.username === reply.user.username ? (
        <Action action="edit" onClick={handleToggleEditing} />
      ) : (
        <Action action="reply" onClick={handleToggleReply} />
      )}
    </div>
  );

  //main component return method
  return (
    <div>
      <Card style={{ margin: "1rem 0" }}>
        <div className={classes.Comment}>
          <div className={classes.comment__top}>
            <img
              src={process.env.PUBLIC_URL + `${reply.user.image.png}`}
              alt=""
            />
            <p className={classes.username}>
              {reply.user.username} {userTag}
            </p>
            <p className={classes.createdAt}>{reply.createdAt}</p>
          </div>

          {/* actual comment here but it's rendering is dependent on whether we're editing or not */}
          {isEditing ? (
            <div className={classes.editInput}>
              <TextArea
                error={false}
                defaultValue={editText}
                onChange={handleEditChange}
              ></TextArea>
              <Button color="primary" onClick={handleEdit}>
                update
              </Button>
            </div>
          ) : (
            <p className={classes.text}>
              <span>{reply.replyingTo}</span> {reply.content}
            </p>
          )}

          <div className={classes.upvote}>
            <Upvote
              upvote={reply.score}
              replyId={reply.id.toString()}
              commentId={commentId}
            />
          </div>
          <div className={classes.replyAndDelete}>
            {!isEditing && (
              <>
                {deleteButton}
                {replyButton}
              </>
            )}
          </div>
        </div>
      </Card>

      {/* only rendered when reply button is clicked */}
      {replying && (
        <Card style={{ marginTop: "0.3rem" }}>
          <div className={classes.addReply}>
            <img src={user.image.png} alt="" />
            <TextArea
              defaultValue={replyText}
              onChange={handleChange}
              error={replyError}
              // ref={replyTextAreaRef}
            ></TextArea>
            {replyError && (
              <p className={classes.error}>Please enter a valid reply</p>
            )}
            <Button color="primary" onClick={handleReply}>
              Reply
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Reply;
