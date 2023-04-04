import React from "react";
import data from "../data.json";
import { ReplyInterface, CommentInterface } from "../types/interfaces";

export type commentsType = typeof data.comments;
type newCommentType = {
  type: "ADD_COMMENT";
  payload: CommentInterface;
};
type editType = {
  type: "EDIT";
  payload: {
    commentId: string;
    replyId?: string;
    update: string;
  };
};

type upvoteType = {
  type: "SCORE";
  operation: "UPVOTE" | "DOWNVOTE";
  payload: {
    commentId: string;
    replyId?: string;
    // isReply?: boolean;
  };
};

type replyType = {
  type: "REPLY";
  payload: {
    commentId: string;
    replyId?: string;
    reply: ReplyInterface;
  };
};

type deleteType = {
  type: "DELETE";
  payload: {
    commentId: string;
    replyId?: string;
  };
};

export type actionType =
  | newCommentType
  | editType
  | upvoteType
  | replyType
  | deleteType;

//TODO : fix the ignore statement
// @ts-ignore
const commentsReducer: React.Reducer<commentsType, actionType> = (
  state: commentsType,
  action: actionType
) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "SCORE": //PS u
      //if no replyId provided, update the comment
      if (!action.payload.replyId) {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                score:
                  action.operation === "UPVOTE"
                    ? comment.score + 1
                    : comment.score - 1, //for "DOWNVOTE"
              }
        );
      }
      //  if replyId exist, find the reply and upvote it
      else {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id.toString() !== action.payload.replyId
                    ? reply
                    : {
                        ...reply,
                        score:
                          action.operation === "UPVOTE"
                            ? reply.score + 1
                            : reply.score - 1,
                      }
                ),
              }
        );
      }

    case "REPLY":
      //if replying to a comment
      if (!action.payload.replyId) {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
        );
      } else {
        //if replying to a reply
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
        );
      }
    case "EDIT":
      if (!action.payload.replyId) {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                content: action.payload.update,
              }
        );
      } else {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id.toString() !== action.payload.replyId
                    ? reply
                    : {
                        ...reply,
                        content: action.payload.update,
                      }
                ),
              }
        );
      }
    case "DELETE":
      //delete comment
      if (!action.payload.replyId) {
        return state.filter(
          (comment) =>
            comment.id.toString() !== action.payload.commentId && comment
        );
      } else {
        //delete a reply
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: comment.replies.filter(
                  (reply) =>
                    reply.id.toString() !== action.payload.replyId && reply
                ),
              }
        );
      }

    default:
      return state;
  }
};

export default commentsReducer;
