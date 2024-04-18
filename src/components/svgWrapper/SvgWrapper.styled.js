import styled from "styled-components";

export const Svg = styled.svg`
  width: ${(props) => {
    switch (props.$id) {
      case "icon-heart":
      case "icon-heart-filled":
        return "24px";
      case "icon-star-filled":
      case "icon-location":
        return "16px";
      default:
        return "20px";
    }
  }};
  height: ${(props) => {
    switch (props.$id) {
      case "icon-heart":
      case "icon-heart-filled":
        return "24px";
      case "icon-star-filled":
      case "icon-location":
        return "16px";
      default:
        return "20px";
    }
  }};
`;
