import { SvgSymbols } from "../../images/svg/SvgSymbols";
import { PillWrapper } from "./Pill.styled";

export const Pill = ({ icon, text }) => {
  return (
    <PillWrapper>
      <SvgSymbols />
      <svg width={18} height={18}>
        <use xlinkHref="#icon-normal" />
      </svg>
      <span>{text}</span>
    </PillWrapper>
  );
};
