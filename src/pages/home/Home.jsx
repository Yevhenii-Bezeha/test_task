import React from "react";
import {
  AdvantageItem,
  AdvantagesSection,
  BgImage,
  CarWrapper,
  HomeWrapper,
  OfferHeader,
  ServicesList,
  TextHeader,
} from "./Home.styled";
import carImage from "./Сar.png";
import bgImage from "./bg-image-car.jpg";

export const Home = () => {
  return (
    <HomeWrapper>
      <BgImage src={bgImage} alt="" />
      <CarWrapper>
        <img src={carImage} alt="" />
      </CarWrapper>
      <TextHeader>
        Welcome to <span>FastWheels Rent</span>! Check our advantages below!
      </TextHeader>

      <OfferHeader>We offer: </OfferHeader>

      <ServicesList>
        <li>Wide Range of Vehicles</li>
        <li>Flexible Rental Plans</li>
        <li>24/7 Customer Support</li>
        <li>Easy Online Booking</li>
      </ServicesList>

      <AdvantagesSection>
        <AdvantageItem>
          <h3>Quality Vehicles</h3>
          <p>Explore our fleet of well-maintained and modern vehicles.</p>
        </AdvantageItem>
        <AdvantageItem>
          <h3>Convenient Booking</h3>
          <p>Book your car online with just a few clicks.</p>
        </AdvantageItem>
        <AdvantageItem>
          <h3>Customer Satisfaction</h3>
          <p>Our top priority is your satisfaction. 24/7 support available.</p>
        </AdvantageItem>
      </AdvantagesSection>
    </HomeWrapper>
  );
};
