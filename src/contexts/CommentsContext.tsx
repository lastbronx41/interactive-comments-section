import React, { createContext, useReducer } from "react";
import data from "../data.json";
import commentsReducer from "../reducers/commentsReducer";
import { actionType, commentsType } from "../reducers/commentsReducer";

export type CommentType = typeof data.comments[0];
export type UserType = typeof data.currentUser;

type CommentsContextType = {
  comments: CommentType[] | null;
  dispatch: React.Dispatch<actionType>;
};

type CommentsProviderProps = {
  children: React.ReactNode;
};

const initialComments = data.comments;

export const CommentsContext = createContext<CommentsContextType>(null!);
// export const CommentsContext = createContext<CommentsContextType>({
//   initialComments,
// });

export function CommentsProvider({ children }: CommentsProviderProps) {
  // const [comments, dispatch] = useReducer(commentsReducer, initialComments);

  const [comments, dispatch] = useReducer<
    React.Reducer<commentsType, actionType>
  >(commentsReducer, initialComments);

  const value = {
    comments,
    dispatch,
  };
  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}
