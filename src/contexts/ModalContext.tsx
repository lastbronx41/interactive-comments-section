import React, { createContext, useReducer } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

type ModalContextType = {
  modalDisplay: {
    visible: boolean;
    commentId: string;
    replyId?: string;
  };
  dispatch: React.Dispatch<actionType>;
};

interface InitialStateInterface {
  visible: boolean;
  commentId: string;
  replyId?: string;
}

const initialState = {
  visible: false,
  commentId: "",
  replyId: "",
};

interface Show {
  type: "SHOW_DELETE_MODAL";
  payload: {
    commentId: string;
    replyId?: string;
  };
}

interface Hide {
  type: "HIDE_DELETE_MODAL";
}

type actionType = Show | Hide;

const reducer: React.Reducer<InitialStateInterface, actionType> = (
  state: InitialStateInterface,
  action: actionType
) => {
  switch (action.type) {
    case "SHOW_DELETE_MODAL":
      console.log("callsed");
      return {
        visible: true,
        commentId: action.payload.commentId,
        replyId: action.payload.replyId,
      };
    case "HIDE_DELETE_MODAL":
      return initialState;
  }
};

export const ModalContext = createContext<ModalContextType>(null!);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalDisplay, dispatch] = useReducer<
    React.Reducer<InitialStateInterface, actionType>
  >(reducer, initialState);
  return (
    <ModalContext.Provider value={{ modalDisplay, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
