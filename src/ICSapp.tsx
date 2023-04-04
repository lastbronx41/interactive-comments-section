import React, { useContext } from "react";
import { CommentsProvider } from "./contexts/CommentsContext";
import { UserProvider } from "./contexts/UserContext";
import ModalProvider from "./contexts/ModalContext";
import CommentsList from "./components/commentsList/CommentsList";

const styles = {
  backgroundColor: "#F5F6FA",
  minHeight: "100vh",
  padding: "3rem 0",
};

function ICSapp() {
  return (
    <UserProvider>
      <CommentsProvider>
        <ModalProvider>
          <div style={styles}>
            <CommentsList />
          </div>
        </ModalProvider>
      </CommentsProvider>
    </UserProvider>
  );
}

export default ICSapp;
