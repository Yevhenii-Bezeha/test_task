import { ReviewsTabWrapper, ReviewsWrapper } from "./ReviewsTab.styled";
import { CustomForm } from "../customForm/CustomForm";
import { Review } from "../review/Review";

export const ReviewsTab = ({ car }) => {
  return (
    <ReviewsTabWrapper>
      <ReviewsWrapper>
        {car.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </ReviewsWrapper>
      <CustomForm></CustomForm>
    </ReviewsTabWrapper>
  );
};
