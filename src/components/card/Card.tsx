import React from "react";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Card({ children, style }: CardProps) {
  const classes = makeStyles({
    card: {
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "1rem",
      ...style,
    },
  })();
  return <div className={classes.card}>{children}</div>;
}

export default Card;
