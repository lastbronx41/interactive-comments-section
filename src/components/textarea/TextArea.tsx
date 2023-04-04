import { forwardRef } from "react";
import { makeStyles } from "@mui/styles";

type TextAreaProps = {
  placeholder?: string;

  error: boolean;
} & React.ComponentProps<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const { placeholder, error, ...rest } = props;
    const classes = makeStyles({
      textarea: {
        borderRadius: "0.5rem",
        border: error ? "2px solid red" : "2px solid  #EAECF1",
        height: "5rem",
        width: "100%",
        padding: "0.5rem 1rem",
        fontFamily: '"Rubik", sans-serif',
        color: "#67727E",
        "&:focus": {
          border: "2px solid #67727E",
          outline: "none",
        },
      },
    })();
    return (
      <textarea
        className={classes.textarea}
        placeholder={placeholder}
        name=""
        ref={ref}
        {...rest}
      ></textarea>
    );
  }
);

export default TextArea;
