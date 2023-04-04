import { makeStyles } from "@mui/styles";

export default makeStyles({
  CommentsList: {
    // margin: "4rem 0",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  modal: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 1,
  },
  wrapper: {
    width: "90%",
    maxWidth: "46rem",
  },

  addComment: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    position: "relative",
    "& textarea": {
      gridColumn: "1/3",
      marginBottom: "1rem",
    },
    "& img": {
      width: "2rem",
    },
    "& button": {
      justifySelf: "flex-end",
    },
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
    position: "absolute",
    bottom: "1rem",
    left: "3rem",
  },

  "@media(min-width: 48rem)": {
    addComment: {
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
    },
    error: {
      bottom: 0,
      left: "3rem",
    },
  },
});
