import React from "react";
import { makeStyles } from "@mui/styles";
import { capitalizeFirstLetter } from "../../helper-functions/capFirstLetter";
import deleteIcon from "../../assets/icon-delete.svg";
import replyIcon from "../../assets/icon-reply.svg";
import editIcon from "../../assets/icon-edit.svg";

type ActionProps = {
  action: "reply" | "delete" | "edit";
} & React.ComponentProps<"button">;

function Action({ action, ...rest }: ActionProps) {
  const classes = makeStyles({
    action: {
      display: "flex",
      alignItems: "center",
      border: "none",
      background: "none",
      color: action === "delete" ? "#ED6468" : "#5457B6",
      fontWeight: "700",
      "& img": {
        marginRight: "0.5rem",
      },
      "& p": {
        display: "inline",
      },
    },
  })();
  const text = capitalizeFirstLetter(action);
  const icon =
    action === "reply"
      ? replyIcon
      : action === "edit"
      ? editIcon
      : action === "delete"
      ? deleteIcon
      : "";
  return (
    <button className={classes.action} {...rest}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </button>
  );
}

export default Action;
