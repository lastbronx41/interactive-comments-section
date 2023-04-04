import { createContext } from "react";
import data from "../data.json";

type UserType = typeof data.currentUser;
type UserProviderProps = {
  children: React.ReactNode;
};
type UserContextType = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
const user = data.currentUser;
export const UserContext = createContext<UserContextType>(user);

export function UserProvider({ children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
