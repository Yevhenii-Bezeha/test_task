import styled from "styled-components";

export const WrapperOverlay = styled.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: auto;
  position: absolute;
  display: flex;
  max-width: 982px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  border-radius: 20px;
  top: 40px;

  img {
    width: 290px;
    height: 310px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ItemHeaderModalWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const ItemPrice = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const ImgList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ItemSubHeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 4px;
  }
`;

export const ItemTagsModalList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 350px;

  & li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: 1.5;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      right: -6px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  li:last-child::after {
    content: none;
  }
`;

export const ItemDescrModalP = styled.p`
  color: #475467;
  font-size: 146x;
  margin-bottom: 44px;
`;

export const CloseModalButton = styled.button`
  background-color: transparent;
  width: 18px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RentCarButton = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;

  &:active {
    background-color: #0b44cd;
  }
`;
