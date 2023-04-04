export interface UserInterface {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}
export interface CommentInterface {
  id: string | number;
  content: string;
  createdAt: string;
  score: number;
  user: UserInterface;
  replies: ReplyInterface[];
}
export interface ReplyInterface {
  id: string | number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: UserInterface;
}
