import { makeStyles } from "@mui/styles";

export default makeStyles({
  Comment: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  comment__top: {
    display: "flex",
    gridRow: "1/2",
    gridColumn: "1/3",
    alignItems: "center",
    marginBottom: "1rem",
    "& img": {
      width: "2rem",
      height: "2rem",
    },
  },
  username: {
    fontWeight: "700",
    margin: "0 1rem",
    color: "#324152",
  },
  userTag: {
    backgroundColor: "#5457B6",
    color: "white",
    padding: "0.2rem 0.5rem",
    marginLeft: "1rem",
    borderRadius: "0.2rem",
    fontSize: "0.8rem",
  },
  createdAt: {},
  text: {
    gridRow: "2/3",
    gridColumn: "1/3",
    marginBottom: "1rem",
    "& span": {
      fontWeight: "700",
      color: "#5457B6",
    },
  },
  upvote: {},
  delete: {
    marginRight: "1rem",
  },
  reply: {},
  replyAndDelete: {
    gridColumn: "2/3",
    gridRow: "3/4",
    justifySelf: "flex-end",
    alignSelf: "center",
    display: "flex",
  },

  replies: {
    paddingLeft: "2rem",
    borderLeft: "2px solid #EAECF1",
  },

  editInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& button": {
      marginTop: "1rem",
    },
  },

  //section for entering reply
  addReply: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    position: "relative",
    // gridTemplateRows: "1fr 1fr",
    "& textarea": {
      gridRow: "1/2",
      gridColumn: "1/3",
      marginBottom: "1rem",
    },
    "& img": {
      width: "2rem",
      gridRow: "2/3",
    },
    "& button": {
      justifySelf: "flex-end",
    },
    "& $error": {
      color: "red",
      fontSize: "0.8rem",
      position: "absolute",
      bottom: "1rem",
      left: "3rem",
    },
  },
  error: {
    postion: "fixed",
    right: 0,
  },

  //MEDIA QUERIES
  //MEDIA QUERIES
  "@media(min-width: 48rem)": {
    Comment: {
      display: "grid",
      gridTemplateRows: "3rem 1fr",
      gridTemplateColumns: " 5rem 1fr",
    },
    comment__top: {
      gridRow: "1/2",
      gridColumn: "2/3",
    },
    text: {
      gridColumn: "2/3",
    },
    upvote: {
      gridColumn: "1/2",
      gridRow: "1/3",
    },
    action: {
      gridColumn: "2/3",
      gridRow: "1/2",
      marginLeft: "auto",
      alignSelf: "center",
    },
    replies: {
      marginLeft: "3rem",
      paddingLeft: "3rem",
      borderLeft: "2px solid #EAECF1",
    },
    addReply: {
      gridTemplateColumns: "3rem 1fr 6rem",
      gridTemplateRows: "1fr",
      "& img": {
        width: "2.5rem",
        gridColumn: "1/2",
        gridRow: "1/2",
      },
      "& textarea": {
        gridColumn: "2/3",
      },
      "& button": {
        alignSelf: "flex-start",
      },
      "& $error": {
        bottom: 0,
      },
    },
  },
});
