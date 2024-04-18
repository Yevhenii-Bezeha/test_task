import { StarsWrapper } from "./StarsRating.styled";
import { SvgWrapper } from "../svgWrapper/SvgWrapper";

export const StarsRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, i) => i + 1);
  return (
    <StarsWrapper>
      {stars.map((star, index) => (
        <SvgWrapper key={index} id="icon-star-filled" />
      ))}
    </StarsWrapper>
  );
};
