import {
  FormWrapper,
  FormHeader,
  StyledForm,
  StyledField,
  StyledErrorMessage,
  StyledButton,
  StyledFieldComment,
} from "./CustomForm.styled";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  bookingDate: Yup.date().required("Required").nullable(),
  comment: Yup.string(),
});

const CustomDatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      selected={value}
      onChange={(val) => onChange(name, val)}
      dateFormat="MM/dd/yyyy"
    />
  );
};

export const CustomForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      window.location.reload();
    }, 400);
  };

  return (
    <FormWrapper>
      <FormHeader>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </FormHeader>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: null,
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <StyledForm>
            <StyledField type="text" name="name" placeholder="Name" />
            <StyledErrorMessage name="name" component="div" />

            <StyledField type="email" name="email" placeholder="Email" />
            <StyledErrorMessage name="email" component="div" />

            <StyledField name="bookingDate">
              {() => (
                <CustomDatePickerField
                  name="bookingDate"
                  value={values.bookingDate}
                  onChange={setFieldValue}
                />
              )}
            </StyledField>
            <StyledErrorMessage name="bookingDate" component="div" />

            <StyledFieldComment
              as="textarea"
              name="comment"
              placeholder="Comment"
            />

            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
