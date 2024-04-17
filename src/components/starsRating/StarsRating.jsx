import { SvgSymbols } from "../../images/svg/SvgSymbols";
import { StarsWrapper } from "./StarsRating.styled";

export const StarsRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, i) => i + 1);
  return (
    <StarsWrapper>
      <SvgSymbols />
      {stars.map((star) => (
        <svg width={18} height={18}>
          <use xlinkHref="#icon-normal" />
        </svg>
      ))}
    </StarsWrapper>
  );
};
