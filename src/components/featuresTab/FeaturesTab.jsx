import {
  PillsWrapper,
  DetailsSecitonWrapper,
  VehicleDetailsWrapper,
  DetailsIten,
  Border,
  FeaturesTabWrapper,
} from "./FeaturesTab.styled";
import { Pill } from "../pill/Pill";
import { CustomForm } from "../customForm/CustomForm";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const FeaturesTab = ({ car }) => {
  const pillData = [
    { key: "adults", value: car.adults },
    { key: "engine", value: car.engine },
    { key: "transmission", value: car.transmission },
    { key: "kitchen", value: car.details.kitchen },
    { key: "beds", value: car.details.beds },
    { key: "airConditioner", value: car.details.airConditioner },
  ];

  return (
    <FeaturesTabWrapper>
      <DetailsSecitonWrapper>
        <PillsWrapper>
          {pillData.map(({ key, value }) => {
            let text = "";

            switch (key) {
              case "adults":
                text = `${value} ${key}`;
                break;
              case "children":
                text = `${value} ${key}`;
                break;
              case "beds":
                text = `${value} ${key}`;
                break;
              case "engine":
                text = value;
                break;
              case "transmission":
                text = value;
                break;
              case "airConditioner":
                text = "AC";
                break;
              default:
                text = key;
            }
            return <Pill icon={key} text={capitalizeFirstLetter(text)} />;
          })}
        </PillsWrapper>
        <VehicleDetailsWrapper>
          <h3>Vehicle details</h3>
          <Border></Border>
          <DetailsIten>
            <span>Form</span>
            <span>{capitalizeFirstLetter(car.form)}</span>
          </DetailsIten>
          <DetailsIten>
            <span>Length</span>
            <span>{capitalizeFirstLetter(car.length.replace(/m/, " m"))}</span>
          </DetailsIten>
          <DetailsIten>
            <span>Width</span>
            <span>{capitalizeFirstLetter(car.width.replace(/m/, " m"))}</span>
          </DetailsIten>
          <DetailsIten>
            <span>Heigth</span>
            <span>{capitalizeFirstLetter(car.height.replace(/m/, " m"))}</span>
          </DetailsIten>
          <DetailsIten>
            <span>Tank</span>
            <span>{capitalizeFirstLetter(car.tank)}</span>
          </DetailsIten>
          <DetailsIten>
            <span>Consumption</span>
            <span>{car.consumption}</span>
          </DetailsIten>
        </VehicleDetailsWrapper>
      </DetailsSecitonWrapper>
      <CustomForm></CustomForm>
    </FeaturesTabWrapper>
  );
};
