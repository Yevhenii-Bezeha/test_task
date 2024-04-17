import styled from "styled-components";

export const CatalogList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
  margin-bottom: 50px;

  h3 {
    text-align: center;
    margin: 0 auto;
    max-width: 400px;
    font-size: 24px;
  }
`;

export const CatalogWrapper = styled.div`
  padding: 20px 128px 150px 128px;
`;

export const LoadMoreButton = styled.button`
  padding: 16px 32px;
  border: 1px solid #475467;
  border-radius: 200px;
  font-weight: 500;
  margin-left: 415px;

  &:active {
    color: #0b44cd;
  }
`;

export const LoaderWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
