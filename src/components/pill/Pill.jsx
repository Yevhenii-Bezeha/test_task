import { PillWrapper } from "./Pill.styled";
import { SvgWrapper } from "../svgWrapper/SvgWrapper";

export const Pill = ({ icon, text }) => {
  return (
    <PillWrapper>
      <SvgWrapper id={`icon-${icon}`} />
      <span>{text}</span>
    </PillWrapper>
  );
};
