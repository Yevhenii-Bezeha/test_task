import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  width: 448px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
`;

export const FormHeader = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: #475467;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  margin-bottom: 14px;
  padding: 18px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: rgba(16, 24, 40, 0.6);
  border: none;
`;

export const StyledFieldComment = styled(Field)`
  margin-bottom: 24px;
  padding: 18px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: rgba(16, 24, 40, 0.6);
  border: none;
  height: 114px;
  font: Inter;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 15px;
`;

export const StyledButton = styled.button`
  width: 160px;
  color: #fff;
  font-weight: 500;
  padding: 16px 60px;
  border-radius: 200px;
  background: #e44848;

  &:hover {
    background-color: #0056b3;
  }
`;
