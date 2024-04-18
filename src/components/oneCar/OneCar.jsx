import React from "react";
import {
  CatalogItem,
  ChooseCarButton,
  ItemButton,
  ItemHeaderWrapper,
  ItemWrapper,
  ItemSubHeaderWrapper,
  ItemDescription,
  PillsWrapper,
} from "./OneCar.styled";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favoritesSlice";
import { toast } from "react-toastify";
import { Pill } from "../pill/Pill";
import { SvgWrapper } from "../svgWrapper/SvgWrapper";
import { ItemRating } from "./../itemRating/ItemRating";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const OneCar = ({ car }) => {
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some((favorite) => favorite._id === car._id);

  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();

  const handleFavoriteClick = (car) => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
      toast.info("Successfully removed from favorites");
    } else {
      dispatch(addToFavorites(car));
      toast.success("Successfully added to favorites");
    }
  };

  const pillData = [
    { key: "adults", value: car.adults },
    { key: "engine", value: car.engine },
    { key: "transmission", value: car.transmission },
    { key: "kitchen", value: car.details.kitchen },
    { key: "beds", value: car.details.beds },
    { key: "airConditioner", value: car.details.airConditioner },
  ];

  return (
    <CatalogItem key={car.id}>
      <img src={car.gallery[0]} alt="Car" crossOrigin="anonymous"></img>
      <ItemWrapper>
        <ItemHeaderWrapper>
          <h1>{car.name}</h1>
          <div>
            <h2>
              {"\u20AC"}
              {Number(car.price).toFixed(2)}
            </h2>
            <ChooseCarButton
              type="button"
              onClick={() => handleFavoriteClick(car)}
            >
              {isFavorite ? (
                <SvgWrapper id="icon-heart-filled" />
              ) : (
                <SvgWrapper id="icon-heart" />
              )}
            </ChooseCarButton>
          </div>
        </ItemHeaderWrapper>
        <ItemSubHeaderWrapper>
          <ItemRating
            rating={car.rating}
            reviewsCount={car.reviews.length}
          ></ItemRating>
          <div>
            <SvgWrapper id="icon-location" />
            <p>{car.location}</p>
          </div>
        </ItemSubHeaderWrapper>
        <ItemDescription>{car.description}</ItemDescription>
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
            return (
              <Pill key={key} icon={key} text={capitalizeFirstLetter(text)} />
            );
          })}
        </PillsWrapper>
        <ItemButton type="button" onClick={openModal}>
          Show more
        </ItemButton>
        {isOpen ? <Modal closeModal={closeModal} car={car} /> : null}
      </ItemWrapper>
    </CatalogItem>
  );
};
