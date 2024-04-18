import { Svg } from "./SvgWrapper.styled";
import sprite from "../../images/svg/sprite.svg";

export const SvgWrapper = ({ id }) => {
  return (
    <Svg $id={id}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </Svg>
  );
};
