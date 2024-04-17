import styled from "styled-components";

export const CatalogItem = styled.li`
  width: 888px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
  display: flex;

  & img {
    min-width: 290px;
    max-width: 290px;
    height: 310px;
    border-radius: 10px;
    margin-right: 24px;
    object-fit: cover;
  }
`;

export const PillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ItemWrapper = styled.div`
  width: 100%;
`;

export const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;

  h2 {
    margin-right: 10px;
  }

  div {
    display: flex;
  }
`;

export const ItemSubHeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 16px;

  div {
    display: flex;
  }

  svg {
    margin-right: 4px;
  }
`;

export const ItemDescription = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 525px;
  margin-bottom: 24px;
`;

export const CuttedBrandWrapper = styled.div`
  max-width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SpannedWrapper = styled.div`
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemTagsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  max-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

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

export const ItemButton = styled.button`
  color: #fff;
  font-weight: 500;
  padding: 16px 40px;
  border-radius: 200px;
  background: #e44848;

  &:active {
    background-color: #0b44cd;
  }
`;

export const ChooseCarButton = styled.button`
  background-color: transparent;
`;
