import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";

//my imports
import { CommentsContext } from "../../contexts/CommentsContext";
import { ModalContext } from "../../contexts/ModalContext";
import Card from "../card/Card";
import Button from "../button/Button";

function DeleteModal() {
  const classes = makeStyles({
    modal: {
      backgroundColor: "rgba(0,0,0,0.5)",
      //   position: "absolute",
      //   top: 0,
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      //   padding: "1rem",
      width: "21rem",
      "& p": {
        margin: " 1rem 0",
      },
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },

    "@media(min-width: 48rem)": {
      wrapper: {
        width: "25rem",
      },
    },
  })();
  const { dispatch } = useContext(CommentsContext);
  const { modalDisplay, dispatch: modalDispatch } = useContext(ModalContext);
  const handleCancel = () => {
    modalDispatch({ type: "HIDE_DELETE_MODAL" });
  };
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: {
        commentId: modalDisplay.commentId,
        replyId: modalDisplay.replyId,
      },
    });
    modalDispatch({ type: "HIDE_DELETE_MODAL" });
  };
  return (
    <div className={classes.modal}>
      <div className={classes.wrapper}>
        <Card style={{ padding: "2rem" }}>
          <h3>Delete comment</h3>
          <p>
            Are you sure you want to delete this comment? This will remove
            comment and can't be undone.
          </p>
          <div className={classes.buttonContainer}>
            <Button onClick={handleCancel}>No, Cancel</Button>
            <Button color="danger" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DeleteModal;
