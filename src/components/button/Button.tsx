import React from "react";
import { makeStyles } from "@mui/styles";

type ButtonProps = {
  children: React.ReactNode;
  color?: "danger" | "primary";
} & React.ComponentProps<"button">;

function Button({ children, color, ...rest }: ButtonProps) {
  const classes = makeStyles({
    button: {
      border: "none",
      textTransform: "uppercase",
      borderRadius: "0.5rem",
      padding: "0.7rem 1rem",
      color: "white",
      backgroundColor:
        color === "primary"
          ? "#5457B6"
          : color === "danger"
          ? "#ED6468"
          : "#67727E",
      fontWeight: "bold",
      fontSize: "0.8125rem",
      transition: "all 0.3s",
      "&:hover": {
        opacity: 0.7,
      },
    },
  })();
  return (
    <button className={classes.button} {...rest}>
      {children}
    </button>
  );
}

export default Button;
