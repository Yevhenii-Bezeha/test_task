import { ItemRatingWrapper } from "./ItemRating.styled";
import { SvgWrapper } from "../svgWrapper/SvgWrapper";

export const ItemRating = ({ rating, reviewsCount }) => {
  return (
    <ItemRatingWrapper>
      <SvgWrapper id="icon-star-filled" />
      <span>{rating}</span>
      <span>({reviewsCount} Reviews)</span>
    </ItemRatingWrapper>
  );
};
