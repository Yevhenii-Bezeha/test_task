import {
  PillsWrapper,
  DetailsSecitonWrapper,
  VehicleDetailsWrapper,
  DetailsItem,
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

  const keyToText = {
    adults: (value) => `${value} adults`,
    children: (value) => `${value} children`,
    beds: (value) => `${value} beds`,
    engine: (value) => value,
    transmission: (value) => value,
    airConditioner: (value) => "AC",
  };

  const carDetails = [
    { label: "Form", value: capitalizeFirstLetter(car.form) },
    {
      label: "Length",
      value: capitalizeFirstLetter(car.length.replace(/m/, " m")),
    },
    {
      label: "Width",
      value: capitalizeFirstLetter(car.width.replace(/m/, " m")),
    },
    {
      label: "Height",
      value: capitalizeFirstLetter(car.height.replace(/m/, " m")),
    },
    { label: "Tank", value: capitalizeFirstLetter(car.tank) },
    { label: "Consumption", value: car.consumption },
  ];

  return (
    <FeaturesTabWrapper>
      <DetailsSecitonWrapper>
        <PillsWrapper>
          {pillData.map(({ key, value }) => {
            let textFunction = keyToText[key];
            let text = textFunction ? textFunction(value) : key;
            return (
              <Pill key={key} icon={key} text={capitalizeFirstLetter(text)} />
            );
          })}
        </PillsWrapper>
        <VehicleDetailsWrapper>
          <h3>Vehicle details</h3>
          <Border></Border>
          {carDetails.map(({ label, value }) => (
            <DetailsItem key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </DetailsItem>
          ))}
        </VehicleDetailsWrapper>
      </DetailsSecitonWrapper>
      <CustomForm></CustomForm>
    </FeaturesTabWrapper>
  );
};
