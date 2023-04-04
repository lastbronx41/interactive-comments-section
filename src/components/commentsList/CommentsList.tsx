import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//my imports
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import DeleteModal from "../delete-modal/DeleteModal";
import Comment from "../comment/Comment";
import TextArea from "../textarea/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";
import CommentsListStyles from "./CommentsListStyles";

function CommentsList() {
  const user = useContext(UserContext);

  //weird implementation because of some TS errors
  const dataFromContext = useContext(CommentsContext);
  const comments = dataFromContext?.comments;
  const dispatch = dataFromContext.dispatch;
  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState(false);

  const { modalDisplay, dispatch: modalDispatch } = useContext(ModalContext);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
  };
  const handleAddNewComment = () => {
    if (!commentText) {
      setCommentError(true);
      return;
    }
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        id: uuidv4(),
        content: commentText,
        createdAt: "now",
        score: 0,
        user,
        replies: [],
      },
    });
    setCommentText("");
  };

  const classes = CommentsListStyles();
  return (
    <div className={classes.CommentsList}>
      {/* delete modal */}
      {modalDisplay.visible && (
        <div className={classes.modal}>
          <DeleteModal />
        </div>
      )}

      {/* wrapper for comments */}
      <div className={classes.wrapper}>
        {comments?.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} />
          </div>
        ))}

        {/* section to add user comment */}
        <Card style={{ marginTop: "2rem" }}>
          <div className={classes.addComment}>
            <TextArea
              value={commentText}
              placeholder="Add a comment..."
              error={commentError}
              onChange={handleChange}
            ></TextArea>
            {commentError && (
              <p className={classes.error}>*Please enter a comment...</p>
            )}
            <img src={process.env.PUBLIC_URL + `${user.image.png}`} alt="" />
            <Button color="primary" onClick={handleAddNewComment}>
              Send
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CommentsList;
