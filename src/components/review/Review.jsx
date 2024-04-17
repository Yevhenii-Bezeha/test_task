import {
  ReviewWrapper,
  ReviewHeader,
  UserFallback,
  UserTitle,
  ReviewComment,
} from "./Review.styled";
import { StarsRating } from "../starsRating/StarsRating";

export const Review = ({ review }) => {
  return (
    <ReviewWrapper>
      <ReviewHeader>
        <UserFallback>{review.reviewer_name.charAt(0)}</UserFallback>
        <div>
          <UserTitle>{review.reviewer_name}</UserTitle>
          <StarsRating rating={review.reviewer_rating}></StarsRating>
        </div>
      </ReviewHeader>
      <ReviewComment>{review.comment}</ReviewComment>
    </ReviewWrapper>
  );
};
