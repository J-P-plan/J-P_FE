import React, { ReactNode, createContext, useContext } from "react";

import CardImage from "./CardImage";
import CardTags from "./CardTags";
import CardTitle from "./CardTitle";
import CommandButton from "./CommandButton";
import LikeButton from "./LikeButton";
import StarButton from "./StarButton";
import UserInfo from "./UserInfo";

interface ICard {
  isLike?: boolean;
  likeCount?: number;
  commandCount: number;
  isStar?: boolean;
  starCount?: number;
  imageSrc?: string;
  tagList?: string[];
  title: string;
  description?: string;
  userName: string;
  userImageSrc: string;
}

const CardContext = createContext<ICard>({} as ICard);

export const useCardContext = () => {
  return useContext(CardContext);
};

interface CardProviderProps {
  children: ReactNode;
  card: ICard;
}

export const Card = ({ children, card }: CardProviderProps) => {
  // Step 3: Provide the Context to child components
  return <CardContext.Provider value={card}>{children}</CardContext.Provider>;
};

Card.LikeButton = LikeButton;
Card.CommandButton = CommandButton;
Card.StarButton = StarButton;
Card.CardImage = CardImage;
Card.CardTags = CardTags;
Card.CardTitle = CardTitle;
Card.UserInfo = UserInfo;

export default Card;
