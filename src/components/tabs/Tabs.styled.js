import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  margin-bottom: 44px;

  button {
    font-size: 20px;
    font-weight: 600;
    background: none;
    border-bottom: ${(props) => (props.active ? "5px solid #E44848" : "none")};
  }
`;

export const HeaderButton = styled.div`
  border-bottom: ${(props) => (props.active ? "5px solid #E44848" : "none")};

  button {
    font-size: 20px;
    font-weight: 600;
    background: none;
  }
`;
